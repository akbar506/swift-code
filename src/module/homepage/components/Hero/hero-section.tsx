"use client";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {

    const badgeFeatures = [
        { icon: "✨", text: "AI-Powered" },
        { icon: "🔓", text: "Open Source" },
        { icon: "⚡", text: "Fast & Lightweight" },
        { icon: "🌐", text: "Web-Based" },
    ];

    return (
        <>
            <section className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-y-7 mt-15 sm:mt-20 px-4 sm:px-6 lg:px-8">
                {/* Badge */}
                <div>
                    <Badge variant={"secondary"}>
                        <span className="bg-foreground rounded-full p-1" />&nbsp;
                        Open Source & AI-Powered
                    </Badge>
                </div>
                {/* Hero Heading*/}
                <div>
                    <h1 className="text-5xl sm:text-6xl font-bold sm:flex flex-col text-center px-4">
                        <span>The <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">AI-powered IDE</span></span>
                        <span> that runs in your browser</span>
                    </h1>
                </div>
                {/* Hero Subheading */}
                <div className="text-lg px-8 py-5 text-center">
                    <p>Experience a web-based IDE that brings AI capabilities directly to your fingertips.</p>
                    <p>Use your own API keys or choose our premium plans for seamless integration.</p>
                </div>
                {/* CTA Buttons */}
                <div className="space-y-3 flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto">
                    <Link href="/dashboard">
                        <Button size="lg" className="sm:w-auto w-full rounded-md font-medium">
                            Start Coding Free <ArrowRight />
                        </Button>
                    </Link>
                    <Link href="https://github.com/akbar506/swift-code" target="_blank" rel="noopener noreferrer">
                        <Button variant={"outline"} size="lg" className="sm:w-auto w-full  sm:ml-3 rounded-md font-medium">
                            View on GitHub
                        </Button>
                    </Link>
                </div>
                {/* Badge Feature */}
                <div className="mt-3 flex flex-wrap justify-center gap-4">
                    {badgeFeatures.map((feature, index) => (
                        <Badge variant={"outline"} className="px-4 py-1" key={index}>
                            <span>{feature.icon}</span> {feature.text}
                        </Badge>
                    ))}
                </div>

            </section>
        </>
    )
}
