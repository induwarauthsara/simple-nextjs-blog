import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Page() {
    return (
        <main className="pt-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 r mt-4">Create Post</h1>
            <Form />
            <LogoutLink>Logout</LogoutLink>
        </main>
    );
};