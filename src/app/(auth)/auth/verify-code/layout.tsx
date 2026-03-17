import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Verify Code - Swift Code",
    description: "Verify the 6-digit code sent to your email to complete your account setup and start using Swift Code.",
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}