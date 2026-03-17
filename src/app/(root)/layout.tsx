import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Swift Code - The AI-powered IDE that runs in your browser",
    description: "Experience a web-based IDE that brings AI capabilities directly to your fingertips. Use your own API keys or choose our premium plans for seamless integration.",
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}