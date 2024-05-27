"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
    // auth check
    const { getUser, isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
    }

    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    // Initialize author name as "Anonymous"
    let author = "Anonymous";

    try {
        // Get the session to access user info
        const userData = await getUser();

        if (userData) {
            const given_name = userData.given_name || "";
            const family_name = userData.family_name || "";
            author = `${given_name} ${family_name}`.trim();
        }
    } catch (error) {
        console.error("Failed to get user data:", error);
        // Author remains "Anonymous" if there is an error
    }

    // Update database
    await prisma.post.create({
        data: {
            title,
            body,
            author // Save the author's name
        },
    });

    // revalidate
    revalidatePath("/posts");
}
