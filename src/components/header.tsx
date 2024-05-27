"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/create-post", label: "Create Post" }
];

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="flex justify-between items-center py-4 px-7 border-b">
            <Link href="/">
                <Image
                    src="/images/logo.svg"
                    alt="logo"
                    className="w-[85px] h-[85px]"
                    width={85}
                    height={85} />
            </Link>

            <nav>
                <ul className="flex gap-x-5 text text-[14px]">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                className={`hover:text-zinc-20 ${pathname === href ? "text-zinc-900 font-bold" : "text-zinc-90"}`}
                                href={href}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>


    )
}
