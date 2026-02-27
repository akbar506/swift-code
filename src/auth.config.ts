import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import bcrypt from "bcryptjs"
import type { NextAuthConfig } from "next-auth"
import { db } from "./lib/db"

export default {
    providers: [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHub({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Credentials({
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials: any): Promise<any> {
            try { 
                const user = await db.user.findUnique({
                    where: { email: credentials.email }
                })

                // If user doesn't exist or has no password (OAuth-only user), reject the sign-in attempt
                if (!user || !user.password) {
                    throw new Error("Invalid email or password");
                }

                // Check if password is valid or not
                const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

                if (!isPasswordValid) {
                    throw new Error("Invalid email or password");
                }

                // Check if the email is verified before allowing sign-in
                if (!user.isEmailVerified) {
                    throw new Error("Email not verified. Please verify your email before signing in.");
                }

                // Return the user object if authentication is successful
                return user;

            } catch (error: any) {
                throw new Error(error)
            }
        }
    })
  ]
} satisfies NextAuthConfig