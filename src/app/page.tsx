"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = useSession();
  const user = session?.user;

  const onSignOut = async () => {
    await signOut();
    window.location.reload();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <Image 
        src={user?.image || "/default-avatar.png"} 
        width={100} 
        height={100} 
        alt="img" 
        className="rounded-full mt-4" 
        />
        <Button onClick={onSignOut}>Sign Out</Button>
        
      </main>
    </div>
  );
}
