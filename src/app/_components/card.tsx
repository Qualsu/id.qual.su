"use client"

import { OrganizationSwitcher } from "@clerk/nextjs";
import { useUser } from '@clerk/clerk-react'
import Image from "next/image";
import { CardProps } from "@/config/types/components.types";

export function Card({ name, description, img, org }: CardProps){
    const { isSignedIn } = useUser()
    
    return (
        <section className="section-shell flex justify-center md:flex-row flex-col items-center gap-6 md:gap-10">
            <Image src={img} width="220" height="220" alt="" className="m-2 md:mr-2 drop-shadow-[0_18px_45px_rgba(0,0,0,0.35)]"/>
            <div className="text-center md:text-left relative">
                <h1 className="section-heading text-white my-4 md:my-2">{name}</h1>
                <h3 className="section-copy break-word max-w-[560px] px-4 md:px-0">{description}</h3>
                {org && isSignedIn &&(
                    <div className="my-4 text-gray-300 flex flex-col">
                        Ваши организации:
                        <div className="my-2"><OrganizationSwitcher /></div>
                    </div>
                )}
            </div>
        </section>
    )
}