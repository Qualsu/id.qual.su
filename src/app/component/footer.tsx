import Image from "next/image";
import logoImg from "../img/Full.png"
import idImg from "../img/QualID.svg"

export function Footer(){
    return (
        <footer className="bg-main-dark rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://qual.su" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={logoImg} height="60" alt="Qualsu logo"/>
                        <span className="text-white">|</span>
                        <Image src={idImg} height="25" alt="Qualsu logo"/>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <a href="https://feedback.qual.su" target="_blank" className="hover:underline me-4 md:me-6">Feedback</a>
                        </li>
                        <li>
                            <a href="https://clerk.com/legal/privacy" target="_blank" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://t.me/qualsu" target="_blank" className="hover:underline me-4 md:me-6">Telegram</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">© 2021-2025 <a href="https://qual.su" className="hover:underline">Qualsu</a></span>
            </div>
        </footer>
    )
}