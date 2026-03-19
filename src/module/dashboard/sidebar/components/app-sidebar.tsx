"use client"

import * as React from "react"
import {
    Home,
    LayoutDashboard,
    Search,
} from "lucide-react"
import Image from "next/image"
import { NavMain } from "@/components/nav-main"
// import { NavFavorites } from "@/components/nav-favorites"
// import { NavSecondary } from "@/components/nav-secondary"
// import { NavWorkspaces } from "@/components/nav-workspaces"
// import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { NavProjects } from "@/components/nav-projects"
import Link from "next/link"

const data = {
    navMain: [
        {
            title: "Home",
            url: "/",
            icon: Home,
            isActive: true,
        },
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
            badge: "10",
        },
        {
            title: "Search",
            url: "#",
            icon: Search,
        },
    ],
    // navSecondary: [
    //     {
    //         title: "Calendar",
    //         url: "#",
    //         icon: Calendar,
    //     },
    //     {
    //         title: "Settings",
    //         url: "#",
    //         icon: Settings2,
    //     },
    //     {
    //         title: "Templates",
    //         url: "#",
    //         icon: Blocks,
    //     },
    //     {
    //         title: "Trash",
    //         url: "#",
    //         icon: Trash2,
    //     },
    //     {
    //         title: "Help",
    //         url: "#",
    //         icon: MessageCircleQuestion,
    //     },
    // ],
    // favorites: [
    //     {
    //         name: "Project Management & Task Tracking",
    //         url: "#",
    //         emoji: "📊",
    //     },
    //     {
    //         name: "Family Recipe Collection & Meal Planning",
    //         url: "#",
    //         emoji: "🍳",
    //     },
    //     {
    //         name: "Fitness Tracker & Workout Routines",
    //         url: "#",
    //         emoji: "💪",
    //     },
    //     {
    //         name: "Book Notes & Reading List",
    //         url: "#",
    //         emoji: "📚",
    //     },
    //     {
    //         name: "Sustainable Gardening Tips & Plant Care",
    //         url: "#",
    //         emoji: "🌱",
    //     },
    //     {
    //         name: "Language Learning Progress & Resources",
    //         url: "#",
    //         emoji: "🗣️",
    //     },
    //     {
    //         name: "Home Renovation Ideas & Budget Tracker",
    //         url: "#",
    //         emoji: "🏠",
    //     },
    //     {
    //         name: "Personal Finance & Investment Portfolio",
    //         url: "#",
    //         emoji: "💰",
    //     },
    //     {
    //         name: "Movie & TV Show Watchlist with Reviews",
    //         url: "#",
    //         emoji: "🎬",
    //     },
    //     {
    //         name: "Daily Habit Tracker & Goal Setting",
    //         url: "#",
    //         emoji: "✅",
    //     },
    // ],
    // workspaces: [
    //     {
    //         name: "Personal Life Management",
    //         emoji: "🏠",
    //         pages: [
    //             {
    //                 name: "Daily Journal & Reflection",
    //                 url: "#",
    //                 emoji: "📔",
    //             },
    //             {
    //                 name: "Health & Wellness Tracker",
    //                 url: "#",
    //                 emoji: "🍏",
    //             },
    //             {
    //                 name: "Personal Growth & Learning Goals",
    //                 url: "#",
    //                 emoji: "🌟",
    //             },
    //         ],
    //     },
    //     {
    //         name: "Professional Development",
    //         emoji: "💼",
    //         pages: [
    //             {
    //                 name: "Career Objectives & Milestones",
    //                 url: "#",
    //                 emoji: "🎯",
    //             },
    //             {
    //                 name: "Skill Acquisition & Training Log",
    //                 url: "#",
    //                 emoji: "🧠",
    //             },
    //             {
    //                 name: "Networking Contacts & Events",
    //                 url: "#",
    //                 emoji: "🤝",
    //             },
    //         ],
    //     },
    //     {
    //         name: "Creative Projects",
    //         emoji: "🎨",
    //         pages: [
    //             {
    //                 name: "Writing Ideas & Story Outlines",
    //                 url: "#",
    //                 emoji: "✍️",
    //             },
    //             {
    //                 name: "Art & Design Portfolio",
    //                 url: "#",
    //                 emoji: "🖼️",
    //             },
    //             {
    //                 name: "Music Composition & Practice Log",
    //                 url: "#",
    //                 emoji: "🎵",
    //             },
    //         ],
    //     },
    //     {
    //         name: "Home Management",
    //         emoji: "🏡",
    //         pages: [
    //             {
    //                 name: "Household Budget & Expense Tracking",
    //                 url: "#",
    //                 emoji: "💰",
    //             },
    //             {
    //                 name: "Home Maintenance Schedule & Tasks",
    //                 url: "#",
    //                 emoji: "🔧",
    //             },
    //             {
    //                 name: "Family Calendar & Event Planning",
    //                 url: "#",
    //                 emoji: "📅",
    //             },
    //         ],
    //     },
    //     {
    //         name: "Travel & Adventure",
    //         emoji: "🧳",
    //         pages: [
    //             {
    //                 name: "Trip Planning & Itineraries",
    //                 url: "#",
    //                 emoji: "🗺️",
    //             },
    //             {
    //                 name: "Travel Bucket List & Inspiration",
    //                 url: "#",
    //                 emoji: "🌎",
    //             },
    //             {
    //                 name: "Travel Journal & Photo Gallery",
    //                 url: "#",
    //                 emoji: "📸",
    //             },
    //         ],
    //     },
    // ],
}

export function AppSidebar({ formattedProjects }: { formattedProjects: { id: string; name: string; url: string; icon: React.ElementType }[] }) {

    return (
        <Sidebar className="border-r-0" >
            <SidebarHeader className="mt-5">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard">
                                <Image
                                    src="/logo-dark.svg"
                                    alt="SwiftCode Logo"
                                    width={45}
                                    height={45}
                                    className="dark:invert ml-2"
                                />
                                <span className="font-bold">SwiftCode</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                {/* <TeamSwitcher teams={data.teams} /> */}
                <NavMain items={data.navMain} />
            </SidebarHeader>
            <SidebarContent>
                <NavProjects projects={formattedProjects} />
                {/* <NavWorkspaces workspaces={data.workspaces} /> */}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
