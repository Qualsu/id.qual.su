import { images } from "@/config/routing/images.route";
import { links } from "@/config/routing/links.route";
import Image from "next/image";
import Link from "next/link";

export function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section-shell mt-6">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={images.QUALSU} width="120" height="60" alt="Qualsu logo"/>
                        <span className="text-white">|</span>
                        <Image src={images.LOGO} width="100" height="25" alt="Qual ID logo"/>
                    </span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-300">
                        <li>
                            <Link href={links.FEEDBACK} target="_blank" className="hover:text-white me-4 md:me-6 transition-colors duration-300 ease-in-out">Feedback</Link>
                        </li>
                        <li>
                            <Link href={links.STATUS} target="_blank" className="hover:text-white me-4 md:me-6 transition-colors duration-300 ease-in-out">Status</Link>
                        </li>
                        <li>
                            <Link href={links.TELEGRAM} target="_blank" className="hover:text-white me-4 md:me-6 transition-colors duration-300 ease-in-out">Telegram</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-300">
                    © 2021-{currentYear}
                    <Link href={links.QUALSU} className="hover:text-white transition-colors duration-300 ease-in-out"> Qualsu</Link>
                </span>
            </div>
        </footer>
    )
}