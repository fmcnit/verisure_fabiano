
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
      <main className="md:flex items-center justify-between bg-[url('/image.jpg')]  z-40 md:h-screen">
        <div>
          <h2 className="text-white uppercase w-2/3 text-3xl p-4 border-l-8 border-red-600">
            Novo alarme Verisure com videomonitoramento Até 40% de desconto
          </h2>
          <Button asChild className="m-5 text-white w-1/2 hover:text-red-600 uppercase font-bold bg-red-600 z-15" variant={"secondary"}>
            <Link
              href={
                "https://wa.me/5521999879406?text=Ol%C3%A1%20Especialista%2C%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gr%C3%A1tis%20do%20sistema%20da%20Verisure%20com%2040%25%20de%20desconto."
              } >Faça sua Cotação</Link>
          </Button>
        </div>
        <Image
          src={"/image.png"}
          alt="minhaImg"
          width={760}
          height={400}
          className="hidden md:block"
        />
        <Image
          src={"/image.png"}
          alt="minhaImg"
          width={760}
          height={400}
          className="-mt-38 md:hidden md:mt-0"
        />
      </main>
      <footer className="h-12 flex items-center justify-center text-red-600 ">
        <p className="text-sm md:text-left w-full p-2">Site desenvolvido para atendimento do especialista Fabiano</p>
      </footer>
    </div>
  );
}
