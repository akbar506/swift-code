import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db";
import authConfig from "./auth.config";
import { getUserbyId } from "./actions";

export const { handlers, signIn, signOut, auth } = NextAuth({
    callbacks: {
        async signIn({ user, account }) {
            if (!user || !account) return false; // Sign-in failed, no user or account information

            // Check If the user exists in the database
            const existingUser = await db.user.findUnique({
                where: { email: user.email! }
            });

            if (!existingUser) {
                // If the user doesn't exist, create a new user record
                const newUser = await db.user.create({
                    data: {
                        email: user.email!,
                        name: user.name || "",
                        image: user.image || "",
                        isEmailVerified: true, // Assuming email is verified if coming from an OAuth provider

                        accounts: {
                            // @ts-ignore
                            // If the user is signing in with an OAuth provider, create an account record
                            create: {
                                type: account.type,
                                provider: account.provider,
                                providerAccountId: account.providerAccountId,
                                refresh_token: account.refresh_token,
                                access_token: account.access_token,
                                expires_at: account.expires_at,
                                token_type: account.token_type,
                                scope: account.scope,
                                id_token: account.id_token,
                                session_state: account.session_state,
                            }
                        }
                    }
                })

                if (!newUser) {
                    return false; // User creation failed
                }
            } else {
                // If the user already exists, update their information
                const existingAccount = await db.account.findUnique({
                    where: {
                        provider_providerAccountId: {
                            provider: account.provider,
                            providerAccountId: account.providerAccountId,
                        }
                    }
                })

                if (!existingAccount) {
                    // If the account doesn't exist for the existing user, create a new account record for the existing user
                    await db.account.create({
                        data: {
                            userId: existingUser.id,
                            type: account.type,
                            provider: account.provider,
                            providerAccountId: account.providerAccountId,
                            refresh_token: account.refresh_token,
                            access_token: account.access_token,
                            expires_at: account.expires_at,
                            token_type: account.token_type,
                            scope: account.scope,
                            id_token: account.id_token,
                            // @ts-ignore
                            session_state: account.session_state,
                        }
                    })
                }
            }

            return true; // Sign-in successful
        },
        async jwt({ token }) {
            if (!token?.sub) return token; // No user ID in token, return as is

            // Check if the user exists in the database
            const existingUser = await getUserbyId(token.sub);

            if (!existingUser) return token; // User doesn't exist, return token as is

            // If the user exists, add their information to the token
            token.name = existingUser.name
            token.email = existingUser.email
            token.picture = existingUser.image

            return token; // Return the modified token with user information
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                // If the token has a user ID and the session has a user object, add the user information to the session
                session.user.id = token.sub;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
                session.user.image = token.picture as string;
            }

            return session; // Return the modified session with user information
        }
    },
    adapter: PrismaAdapter(db),
    secret: process.env.AUTH_SECRET,
    ...authConfig
})