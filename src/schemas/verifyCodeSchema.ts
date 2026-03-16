import z from "zod"

export const verifyCodeSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    code: z.string().length(6, "Verification code must be 6 digits"),
})