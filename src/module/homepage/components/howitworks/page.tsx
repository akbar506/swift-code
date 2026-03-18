"use client";

import { Code2, Key, Sparkles, User } from "lucide-react";

export default function HowItWorks() {

    const steps = [
        {
            icon: User,
            title: "Create your account",
            description: "Sign up with your Email, Google or GitHub account. It's quick, easy, and free to get started.",
        },
        {
            icon: Key,
            title: "Add your API key or subscribe",
            description: "Paste your own OpenAI, Anthropic, or other provider key to use AI for free. Prefer no key management? Pick a plan and we handle it.",
        },
        {
            icon: Code2,
            title: "Open or create a project",
            description: "Import from GitHub, start from a template, or create a new project from scratch. Environment is ready instantly.",
        },
        {
            icon: Sparkles,
            title: "Code with AI assistance",
            description: "Get completions as you type, ask the AI chat panel to generate or fix code, and run it right in the browser.",
        },
    ];

    return (
        <>
            <section id="howitworks" className="py-12 bg-foreground/5 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold sm:text-4xl mb-4">How It Works</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From zero to coding with AI in under a minute.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:bg-card/80 transition-all duration-300">
                                    <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}