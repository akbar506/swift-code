import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import bcrypt from "bcryptjs"
import type { NextAuthConfig } from "next-auth"
import { CredentialsSignin } from "next-auth"
import { db } from "./lib/db"

class CustomError extends CredentialsSignin {
    constructor(message: string) {
        super();
        this.code = message;
    }
}

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
                const user = await db.user.findUnique({
                    where: { email: credentials.email }
                })
                
                if (!user || !user.password) {
                    throw new CustomError("Invalid email or password");
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials?.password ?? "",
                    user.password
                );

                if (!isPasswordValid) {
                    throw new CustomError("Invalid email or password");
                }

                if (!user.isEmailVerified) {
                    throw new CustomError("Please verify your email before signing in.");
                }
                
                return user;
            }
        })
    ]
} satisfies NextAuthConfig