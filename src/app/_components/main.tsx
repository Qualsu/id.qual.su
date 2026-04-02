import Image from "next/image";
import { images } from "@/config/routing/images.route";

export function Main(){
    return (
        <main className="section-shell text-center">
          <div className="pointer-events-none absolute inset-y-10 left-1/2 hidden w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl md:block" />
          <div className="flex justify-center items-center">
            <Image
              src={images.BANNER}
              width={800}
              height={400}
              alt="banner"
              className="banner relative m-4 sm:m-8"
              quality={100}
              unoptimized
            />
          </div>
          <h1 className="relative flex items-center md:flex-row flex-col justify-center text-2xl sm:text-3xl md:text-4xl break-words p-4 text-white">
              <Image src={images.LOGO} width="130" height="25" alt="ID" className="mx-2"/>
              <span className="mr-2"> - </span>
              Единый аккаунт для всех
          </h1>
      </main>
    )
}