import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId, code }: { userId: string; code: string } = await req.json();

        if (!userId || !code) {
            return NextResponse.json({
                message: "User ID and code are required",
                success: false
            }, { status: 400 });
        }

        const user = await db.user.findUnique({
            where: { id: userId } // 
        });

        if (!user) {
            return NextResponse.json({
                message: "User not found",
                success: false
            }, { status: 404 });
        }

        if (user.isEmailVerified) {
            return NextResponse.json({
                message: "Email is already verified",
                success: false
            }, { status: 400 });
        }

        const isCodeValid = user.emailVerificationCode === code; // Check if the provided code matches the one in the database

        // Check if the code has not expired by comparing the current date with the expiration date stored in the database
        const isCodeExpiryValid = new Date(user.emailVerificationCodeExpires || "") > new Date(); 

        if (!isCodeExpiryValid) {
            return NextResponse.json({
                message: "Verification code has expired",
                success: false
            }, { status: 400 });
        }

        if (!isCodeValid) {
            return NextResponse.json({
                message: "Invalid verification code",
                success: false
            }, { status: 400 });
        }


        await db.user.update({
            where: { id: userId },
            data: {
                isEmailVerified: true,
                emailVerificationCode: null,
                emailVerificationCodeExpires: null
            }
        });

        return NextResponse.json({
            message: "Email verified successfully",
            success: true
        }, { status: 200 });

    } catch (error) {
        console.error("Error verifying code:", error);
        return NextResponse.json({
            message: "An error occurred while verifying the code",
            success: false
        }, { status: 500 });
    }
}