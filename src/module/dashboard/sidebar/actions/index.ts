"use server";

import { db } from "@/lib/db";
import { getCurrentUser } from "@/actions";

export const getAllProjectsForUser = async () => {
    const user = await getCurrentUser();

    try {
        const projects = await db.project.findMany({
            where: {
                userId: user.id,
            },
            include: {
                user: true,
            }
        })

        return projects;
    } catch (error) {
        console.error("Error fetching projects for user:", error);
        return [];
    }
}