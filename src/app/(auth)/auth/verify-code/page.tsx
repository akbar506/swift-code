"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { ApiResponse } from "@/types/api-response";
import { Loader } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { verifyCodeSchema } from "@/schemas/verifyCodeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

export default function VerifyCodePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const userId = searchParams.get("userId") || "";

    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof verifyCodeSchema>>({
        resolver: zodResolver(verifyCodeSchema),
        defaultValues: {
            userId,
            code: "",
        }
    });

    const onSubmit = async (data: z.infer<typeof verifyCodeSchema>) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post<ApiResponse>("/api/verify-email", data);
            toast.success("Email verified successfully!", {
                description: response.data.message || "You can now sign in to your account.",
            });

            router.push("/auth/sign-in");
        } catch (error) {
            const err = error as AxiosError<ApiResponse>;

            toast.error("Verification failed", {
                description: err.response?.data.message || "Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center space-y-8">
            <div className="flex flex-col items-center space-y-3">
                <Image src="/logo-dark.svg" alt="Swift Code Logo" width={70} height={70} className="dark:invert" />
                <h1 className="text-2xl font-bold">Verify your account</h1>
                <p className="text-sm text-muted-foreground text-center max-w-sm">
                    Enter the 6-digit code sent to your email address.
                </p>
            </div>

            <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-10 bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-md">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FieldGroup>
                        <Controller
                            name="code"
                            control={form.control}
                            render={({ field }) => (
                                <Field data-invalid={!!form.formState.errors.code}>
                                    {form.formState.errors.code && (
                                        <FieldError errors={[{ message: form.formState.errors.code.message }]} />
                                    )}
                                    <InputOTP 
                                    maxLength={6} 
                                    id="otp-verification" 
                                    containerClassName="w-full justify-center"
                                    {...field}>
                                        <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                        </InputOTPGroup>
                                        <InputOTPSeparator className="mx-2" />
                                        <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </Field>
                            )}
                        />

                        <Button type="submit" className="w-full h-10 cursor-pointer" disabled={isSubmitting || !userId}>
                            {isSubmitting ? (
                                <>
                                    <Loader className="mr-2 h-5 w-5 animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                "Verify Code"
                            )}
                        </Button>
                    </FieldGroup>
                </form>
                <p className="text-sm text-muted-foreground mt-3">
                    If you didn't receive the code or it has been expired, Please create your account again.{" "} 
                    <Link href="/auth/sign-up" className="underline-offset-4 hover:underline dark:text-primary">
                    Sign up
                </Link>
                </p>
            </div>

            <p className="text-sm text-muted-foreground">
                Already verified?{" "}
                <Link href="/auth/sign-in" className="underline-offset-4 hover:underline dark:text-primary">
                    Sign in
                </Link>
            </p>
        </div>
    );
}
