"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
    return (
        <>
            <section className="py-12 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl mb-4">Start coding with AI today</h2>
                        <p className="text-[#888] text-base leading-relaxed mb-8 max-w-md mx-auto">
                            No install. No credit card required. Open your browser and start
                            building — free forever with your own API key.
                        </p>
                    </div>
                    <div className="flex  justify-center items-center gap-4">
                        <Link href={"/dashboard"}>
                            <Button size={"lg"}>
                                Get Started
                            </Button>
                        </Link>
                        <Link href={"https://github.com/akbar506/swift-code"} target="_blank">
                            <Button variant={"outline"} size={"lg"}>
                                Star on GitHub
                            </Button>
                        </Link>
                    </div>
                    <p className="text-[#888] text-center text-sm mt-6">
                        Free forever with your own API key · No credit card required
                    </p>
                </div>
            </section>
        </>
    );
}