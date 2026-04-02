"use client"

import { OrganizationSwitcher } from "@clerk/nextjs";
import { useUser } from '@clerk/clerk-react'
import Image from "next/image";
import { CardProps } from "@/config/types/components.types";

export function Card({ name, description, img, org }: CardProps){
    const { isSignedIn } = useUser()
    
    return (
        <section className="flex justify-center md:flex-row flex-col items-center mt-12">
            <Image src={img} width="250" height="250" alt="" className="m-2 md:mr-12"/>
            <div className="text-center md:text-left">
                <h1 className="text-4xl text-white my-5 md:my-2">{name}</h1>
                <h3 className="text-xl break-word max-w-[500px] text-gray-300 px-4 md:px-0">{description}</h3>
                {org && isSignedIn &&(
                    <div className="my-2 text-gray-400 flex flex-col">
                        Ваши организации:
                        <div className="my-2"><OrganizationSwitcher/></div>
                    </div>
                )}
            </div>
        </section>
    )
}