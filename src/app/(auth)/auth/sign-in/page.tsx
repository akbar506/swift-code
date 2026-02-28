"use client";
import * as z from "zod";
import { useTheme } from "next-themes";
import { signInSchema } from "@/schemas/signInSchema";
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import Image from "next/image";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignIn() {
    const { resolvedTheme } = useTheme();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    // Toggle password visibility
    const toggleVisibility = () => setIsVisible(!isVisible);

    const onSubmit = async (data: z.infer<typeof signInSchema>) => {
        setIsSubmitting(true);

        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        setIsSubmitting(false);

        if (result?.error) {
            const errorCode = (result as any).code;
            toast.error(errorCode || "Sign-in failed", {
                description: errorCode === "Invalid email or password"
                    ? "Please check your credentials and try again."
                    : errorCode || "An error occurred while signing in.",
            });
        }

        if (result?.url) {
            toast.success("Signed in successfully!");
            window.location.reload();
        }
    }

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center space-y-8">
                <div className="flex flex-col items-center space-y-3">
                    <Image src={resolvedTheme === "light" ? "/logo-dark.svg" : "/logo-light.svg"} alt="Swift Code Logo" width={70} height={70} className="" />
                    <h1 className="text-2xl font-bold">Sign in to your account</h1>
                </div>
                <div className="w-full max-w-md sm:max-w-lg p-6 sm:p-10 bg-neutral-900 rounded-lg shadow-md">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FieldGroup>
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-email">
                                            Email Address
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-email"
                                            aria-invalid={fieldState.invalid}
                                            className="h-12"
                                            placeholder="Enter your email"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="password"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-password">
                                            Password
                                        </FieldLabel>
                                        <div className="relative">
                                            <Input
                                                {...field}
                                                id="form-password"
                                                aria-invalid={fieldState.invalid}
                                                className="h-12"
                                                placeholder="••••••••"
                                                autoComplete="off"
                                                type={isVisible ? "text" : "password"}

                                            />
                                            <button
                                                aria-label="toggle password visibility"
                                                className="focus:outline-solid outline-transparent absolute right-3 top-1/2 transform -translate-y-1/2"
                                                type="button"
                                                onClick={toggleVisibility}
                                            >
                                                {isVisible ? (
                                                    <Eye className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        </div>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Button 
                                type="submit" 
                                className="w-full h-10 cursor-pointer" 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader className="mr-2 h-5 w-5 animate-spin" />
                                        Signing In...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </FieldGroup>
                    </form>
                </div>
            </div>
        </>
    )
}