import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/routing/images.route";
import { User } from "./user";
import { pages } from "@/config/routing/pages.route";

export function Header(){
    return (
        <div className="py-4 bg-main-dark">
            <div className="container mx-auto justify-between flex items-center px-5">
                <Link href={pages.ROOT} className="mx-2">
                    <h1 className="filter flex items-center">
                        <Image src={images.LOGO} width="100" height="100" alt="QualID Logo" className="drop-shadow"/>
                    </h1>
                </Link>
                <div className="flex gap-2 mx-2">
                    <User/>
                </div>
            </div>
        </div>
    )
}