import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sign-in - Swift Code",
    description: "Sign-in to your Swift Code account to access your projects and settings.",
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}