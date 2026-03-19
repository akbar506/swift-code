"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { LogOutIcon, MonitorIcon, MoonIcon, PaletteIcon, Settings2, SidebarIcon, SunIcon, UserIcon } from "lucide-react";
import { getCurrentUser } from "@/actions";
import { Separator } from "@/components/ui/separator";
import { User } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Navbar() {
    const { toggleSidebar } = useSidebar()
    const [user, setUser] = useState<User | undefined>(undefined);
    
    const { setTheme, theme } = useTheme();
    useEffect(() => {
        getCurrentUser().then(setUser);
    }, []);


    const onSignOut = async () => {
        await signOut();
        window.location.reload();
      }

    return (
        <>
            <nav className="font-sans border-b border-zinc-200 dark:border-zinc-700 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div>
                        <Button
                            className="h-8 w-8"
                            variant="ghost"
                            size="icon"
                            onClick={toggleSidebar}
                        >
                            <SidebarIcon />
                        </Button>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="text-lg font-semibold">Dashboard</div>
                </div>
                <div className="mr-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar size="lg">
                                <AvatarImage src={user?.image || ""} />
                                <AvatarFallback>
                                    <Image src="/default_avatar.webp" alt="User" height={40} width={40} />
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-44">
                            <DropdownMenuGroup>
                                    <DropdownMenuItem className="flex flex-col justify-start gap-0">
                                        <p className="text-[12px]">Signed in as:</p>
                                        <p className="font-semibold">{user?.name}</p>
                                    </DropdownMenuItem>
                                <DropdownMenuLabel>Account</DropdownMenuLabel>
                                <Link href="/dashboard/profile">
                                    <DropdownMenuItem>
                                        <UserIcon />
                                        Profile
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/dashboard/settings">
                                    <DropdownMenuItem>
                                        <Settings2 />
                                        Settings
                                    </DropdownMenuItem>
                                </Link>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <PaletteIcon />
                                        Theme
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuGroup>
                                                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                                                <DropdownMenuRadioGroup
                                                    value={theme}
                                                    onValueChange={setTheme}
                                                >
                                                    <DropdownMenuRadioItem value="light">
                                                        <SunIcon />
                                                        Light
                                                    </DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="dark">
                                                        <MoonIcon />
                                                        Dark
                                                    </DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="system">
                                                        <MonitorIcon />
                                                        System
                                                    </DropdownMenuRadioItem>
                                                </DropdownMenuRadioGroup>
                                            </DropdownMenuGroup>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem variant="destructive" onClick={onSignOut}>
                                    <LogOutIcon />
                                    Sign Out
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

            </nav>
        </>
    )
}