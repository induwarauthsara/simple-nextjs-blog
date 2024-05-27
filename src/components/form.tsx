import { createPost } from "@/actions/actions";

export default function Form() {
    return (
        <form
            action={createPost}
            className="flex flex-col max-w-[400px] mx-auto gap-2 my-10">
            <input
                type="text"
                name="title"
                placeholder="Title for new post"
                className="border rounded px-3 h-10"
                required />
            <textarea
                name="body"
                placeholder="Content for New post"
                className="border rounded px-3 py-2"
                rows={5}
            />
            <button className="h-10 bg-blue-500 px-6 text-white rounded">Submit</button>
        </form>
    )
}



