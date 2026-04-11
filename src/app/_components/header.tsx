import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/routing/images.route";
import { pages } from "@/config/routing/pages.route";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Header(){
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-6 md:px-8 lg:px-10">
                <div className="surface-panel mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl px-4 py-3 sm:px-5 sm:py-4">
                    <Link href={pages.ROOT} className="mx-2">
                        <h1 className="filter flex items-center">
                            <Image src={images.LOGO} width="150" height="100" alt="QualID Logo" className="drop-shadow"/>
                        </h1>
                    </Link>
                    <div className="flex gap-2 mx-2 items-center">
                        <UserButton/>
                        <SignedOut>
                            <SignInButton>
                                <Link className="primary-button hover:cursor-pointer" href={pages.AUTH}>
                                    Войти
                                </Link>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </div>
            </nav>
            <div className="h-20 md:h-24"/>
        </>
    )
}