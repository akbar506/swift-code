import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Swift Code - Your AI-Powered Code Editor",
    description: "",
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}