import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sign Up - Swift Code",
    description: "Create a new account with Swift Code.",
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}