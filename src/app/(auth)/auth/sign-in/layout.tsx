import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sign In - Swift Code",
    description: "Authenticate with your Swift Code account.",
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}