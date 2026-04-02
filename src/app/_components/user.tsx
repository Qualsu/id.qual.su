import { pages } from "@/config/routing/pages.route";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function User(){
    return (
        <>
            <UserButton/>
            <SignedOut>
                <SignInButton>
                    <Link className="text-white hover:cursor-pointer hover:text-gray-300 active:font-xs" href={pages.AUTH}>Войти</Link>
                </SignInButton>
            </SignedOut>
        </>
    )
}