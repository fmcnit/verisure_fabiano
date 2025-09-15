
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden h-screem">
      <header className="flex items-center justify-between p-2 ">
        <Image src={"/Verisure_logo.png"} alt="logo" width={300} height={300} />
        <h1 className="text-2xl text-red-600 align-text-top uppercase font-bold">
          Especialista de segurança FabIAno Magalhães
        </h1>
      </header>
      <main className="flex items-center justify-between bg-[url('/image.jpg')]  z-40bg-cover h-full">
        <div>
          <h2 className="text-white uppercase w-2/3 text-3xl p-4 border-l-8 border-red-600">
            Novo alarme Verisure com videomonitoramento Até 40% de desconto
          </h2>
          <button className="bg-red-600 p-3 m-4 ">Faça sua cotação</button>
        </div>
        <Image
          src={"/image.png"}
          alt="minhaImg"
          width={660}
          height={400}
          className="z-10 border-l-8 border-red-600"
        />
      </main>
    </div>
  );
}
