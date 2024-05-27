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

    // Get the session to access user info
    const userData = await getUser();

    const given_name = userData.given_name;
    const family_name = userData.family_name;
    const author = given_name + " " + family_name;




    // Update database
    await prisma.post.create({
        data: {
            title,
            body,
            author, // Save the author's name
        },
    });

    // revalidate
    revalidatePath("/posts");
}
