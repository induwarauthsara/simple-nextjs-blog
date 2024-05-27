import prisma from "@/lib/db";

export default async function Page({ params }: { params: { id: string } }) {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id)
        }
    });


    // if { message: "Invalid post id 'lplplp'" } is returned, then the post does not exist
    if (!post) {
        return (
            <main className="px-7 pt-24 text-center">
                <h1 className="text-5xl font-semibold mb-7">Post not found</h1>
            </main>
        );
    } else {
        return (
            <main className="px-7 pt-24 text-center">
                <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
                <p className="text-lg font-semibold mb-7">{"Author : " + post.author}</p>
                <p className="max-w-[700px] mx-auto">{post.body}</p>
            </main>
        );
    }
}