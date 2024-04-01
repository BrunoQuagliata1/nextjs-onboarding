import Logo from "./ui/logo";
import Image from "next/legacy/image";

async function Banner() {
  return (
    <div className="flex max-h-screen min-h-screen w-full flex-col items-center justify-between">
      <div className="mt-32 ">
        <div className="w-40">
          <Logo type="secondary" alt="secondary Logo" />
        </div>
        <h1 className="mb-8 w-96 text-3xl font-semibold leading-[108%] -tracking-[1px] text-white">
          Comienza a simplificar tus acciones, aquí.
        </h1>
        <p className="w-96 text-lg font-normal leading-[108%] -tracking-[1px] text-white">
          En nuestra plataforma web vas a encontrar todo lo que estás buscando.
        </p>
      </div>
      <div className="absolute !bottom-0 !top-auto -left-14 !h-[40%] !w-[40%]">
        <Image src="/banner/banner.svg" priority layout="fill" alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
