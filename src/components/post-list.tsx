import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostsList() {

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const posts = await prisma.post.findMany();
    return (
        <ul>
            {
                posts.map((post) => (
                    <li key={post.id} className="text-left p-3 border-b text-center">
                        <Link href={`posts/${post.id}`}>{post.title}</Link>
                    </li>)
                )
            }
        </ul>
    )
}
