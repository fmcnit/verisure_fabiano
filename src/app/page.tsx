"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  
  return (
    <div className="overflow-hidden h-screem">
      <header className="md:flex items-center justify-between p-2">
        <Image src={"/Verisure_logo.png"} alt="logo" width={300} height={300} />
        <div>
          <p className="text-red-600">Especialista de segurança:</p>
          <h1 className=" text-2xl text-red-600 uppercase font-bold">
            FabIAno Magalhães
          </h1>
        </div>
      </header>
      <main className="md:flex items-center justify-between bg-[url('/image.jpg')]">
        <div>
          <h2 className="text-white uppercase w-2/3 text-3xl p-4 border-l-8 border-red-600">
            Novo alarme Verisure com videomonitoramento Até 40% de desconto
          </h2>
          <Button
            asChild
            className="flex m-5 text-white w-1/2 hover:text-red-600 uppercase font-bold bg-red-600 text-center">
            <Link
              href={
                "https://wa.me/5521999879406?text=Ol%C3%A1%20Especialista%2C%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gr%C3%A1tis%20do%20sistema%20da%20Verisure%20com%2040%25%20de%20desconto."
              }
              target="_blank">
              Faça sua Cotação
            </Link>
          </Button>
        </div>
        <Image
          src={"/image.png"}
          alt="minhaImg"
          width={1260}
          height={500}
          className="hidden md:flex"
        />
        <Image
          src={"/image.png"}
          alt="minhaImg"
          width={760}
          height={400}
          className="md:hidden"
        />
      </main>
      <div className="md:h-screen md:w-screen  md:flex items-center justify-between mx-2 ">
        <Image
          src={"/banner01.jpg"}
          alt="minhaImg"
          width={760}
          height={600}
          className="p-4"
          
        />
        <h2 className="text-4xl p-8 text-center text-red-600">"Não tenha medo, tenha Verisure"</h2>
      </div>
      <footer className="h-12 flex items-center justify-center text-red-600 bg-gray-400">
        <p className="text-sm md:text-left w-full p-2 text-center">
          Site desenvolvido para atendimento do especialista Fabiano Magalhães
          da Verisure Brasil
        </p>
      </footer>
    </div>
  );
}
 