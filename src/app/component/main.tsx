import Image from "next/image";
import bannerImg from "../img/Banner.png"
import idImg from "../img/QualID.svg"

export function Main(){
    return (
        <main className="text-center">
          <div className="flex justify-center items-center">
            <Image src={bannerImg} width="1000" alt="banner" className="banner animate-fade animate-duration-[700ms] animate-delay-[1000ms]"/>
          </div>
          <h1 className="flex items-center md:flex-row flex-col justify-center text-3xl break-words p-4 text-white animate-fade-up animate-once animate-duration-[1300ms] animate-delay-[1300ms]">
              <Image src={idImg} width="130" alt="ID" className="mx-2"/>
              <span className="mr-2"> - </span>
              Единый аккаунт для всех
          </h1>
      </main>
    )
}