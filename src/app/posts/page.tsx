import PostsList from "@/components/post-list";
import { Suspense } from "react";


export default async function Page() {
    return (
        <main className="text-center pt-16 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-center mt-4" >All Posts</h1>

            <Suspense fallback="Posts are Loading...">
                <PostsList />
            </Suspense>
        </main>
    )
}
