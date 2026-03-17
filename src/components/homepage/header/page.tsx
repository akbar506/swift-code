"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Header() {
    const { setTheme, theme } = useTheme();
    const { status } = useSession();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 h-16">
            <div className="max-w-7xl mx-auto flex items-center justify-between mt-3 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <Image src="/logo-dark.svg" alt="Swift Code" width={55} height={55} className="dark:invert" />
                    <p>Swift Code</p>
                </Link>

                {/* Navigation */}
                <nav className="hidden sm:flex items-center gap-5">
                    <Link href="/#features" className="text-sm font-medium">
                        Features
                    </Link>
                    <Link href="/#howitworks" className="text-sm font-medium">
                        How it works
                    </Link>
                    <Link href="/#pricing" className="text-sm font-medium">
                        Pricing
                    </Link>
                </nav>

                {/* Theme Toggle and Auth Buttons */}
                <div className="flex items-center gap-2">
                    <Button variant={"ghost"} size={"icon"} onClick={toggleTheme}>
                        {theme === "dark" ? <Sun /> : <Moon color="black" />}
                    </Button>
                    <Button variant={"secondary"}>
                        {status !== "authenticated" ? (
                            <Link href="/auth/sign-in">
                                Sign In
                            </Link>
                        ) : (
                            <Link href="/dashboard">
                                Dashboard
                            </Link>
                        )}
                    </Button>

                    <Button className="hidden sm:block">
                        <Link href="/dashboard" className="flex items-center gap-x-1">
                            Get Started
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
