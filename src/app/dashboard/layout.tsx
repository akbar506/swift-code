import { AppSidebar } from "@/module/dashboard/sidebar/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import Navbar from "@/module/dashboard/sidebar/components/navbar"

import ReactIcon from "@/components/icons/react"
import VueIcon from "@/components/icons/vue"
import AngularIcon from "@/components/icons/angular"
import SvelteIcon from "@/components/icons/svelte"
import ExpressIcon from "@/components/icons/express"
import PythonIcon from "@/components/icons/python"
import NextjsIcon from "@/components/icons/nextjs"

import { Metadata } from "next"
import { getAllProjectsForUser } from "@/module/dashboard/sidebar/actions"
import { Sparkles } from "lucide-react"

export const metadata: Metadata = {
    title: "Dashboard - SwiftCode",
    description: "Access your projects, and settings in the SwiftCode dashboard.",
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    const projects = await getAllProjectsForUser();

    const technologyIconMap: Record<string, React.ElementType> = {
        REACT: ReactIcon,
        NEXTJS: NextjsIcon,
        VUE: VueIcon,
        ANGULAR: AngularIcon,
        SVELTE: SvelteIcon,
        EXPRESS: ExpressIcon,
        PYTHON: PythonIcon,

    }

    const formattedProjects = projects.map((project) => ({
        id: project.id,
        name: project.name,
        url: "#",
        icon: technologyIconMap[project.template] || Sparkles,
    }));

    return (
        <>
            <div className="min-h-screen">
                <SidebarProvider>
                    <AppSidebar formattedProjects={formattedProjects} />
                    <SidebarInset>
                        <Navbar />
                        {children}
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </>
    )
}