import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerficationCode";

export async function POST(req: NextRequest) {
    try {
        const { name, email, password }: { name: string; email: string; password: string } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({
                message: "Name, email, and password are required",
                success: false
            }, { status: 400 });
        }

        const existingUser = await db.user.findUnique({
            where: { email }
        });

        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        let verifyCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit verification code

        if (existingUser) {
            if (existingUser.isEmailVerified) {
                return NextResponse.json({
                    message: "User with this email already exists",
                    success: false
                }, { status: 400 });
            } else {
                // If user exists but is not verified, update their details
                await db.user.update({
                    where: { email },
                    data: {
                        password: hashedPassword,
                        emailVerificationCode: verifyCode,
                        emailVerificationCodeExpires: new Date(Date.now() + 10 * 60 * 1000),
                    }
                });
            }
        } else {
            // If user doesn't exist, create a new user record
            const newUser = await db.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    isEmailVerified: false,
                    emailVerificationCode: verifyCode,
                    emailVerificationCodeExpires: new Date(Date.now() + 10 * 60 * 1000), // Code expires in 10 minutes
                }
            })

            // Create the account separately to avoid a transaction
            await db.account.create({
                data: {
                    userId: newUser.id,
                    type: "credentials",
                    provider: "credentials",
                    providerAccountId: email,
                }
            });
        }

        const emailResponse = await sendVerificationEmail(email, verifyCode, name); // Send verification email

        if (!emailResponse.success) {
            console.error("Failed to send verification email:", emailResponse.message);
        }

        return NextResponse.json({
            message: "User created successfully. Please check your email for verification.",
            success: true
        }, { status: 201 });

    } catch (error) {
        console.error("Error during sign-up: ", error);
        return NextResponse.json({
            message: "Internal Server Error",
            success: false
        }, { status: 500 });
    }
}