import { images } from "@/config/routing/images.route";
import { links } from "@/config/routing/links.route";
import Image from "next/image";
import Link from "next/link";

export function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-main-dark rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={images.QUALSU} width="120" height="60" alt="Qualsu logo"/>
                        <span className="text-white">|</span>
                        <Image src={images.LOGO} width="100" height="25" alt="Qual ID logo"/>
                    </span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <Link href={links.FEEDBACK} target="_blank" className="hover:text-white/80 me-4 md:me-6">Feedback</Link>
                        </li>
                        <li>
                            <Link href={links.STATUS} target="_blank" className="hover:text-white/80 me-4 md:me-6">Status</Link>
                        </li>
                        <li>
                            <Link href={links.TELEGRAM} target="_blank" className="hover:text-white/80 me-4 md:me-6">Telegram</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">
                    © 2021-{currentYear}
                    <Link href={links.QUALSU} className="hover:text-white/80"> Qualsu</Link>
                </span>
            </div>
        </footer>
    )
}