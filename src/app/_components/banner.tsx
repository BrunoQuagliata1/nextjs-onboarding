import Image from "next/legacy/image";

import Logo from "./ui/logo";

async function Banner() {
  return (
    <div className="top-0 flex w-full flex-col items-center justify-center">
      <div className="-mt-40 flex w-1/2 flex-col gap-2 text-white max-lg:w-[90%]">
        <Logo type="secondary" alt="secondary Logo" width={40} />
        <h1 className="text-3xl font-semibold">
          Comienza a simplificar tus acciones,
          <span className="cursor-pointer text-blue-600"> aquí.</span>
        </h1>
        <p className="text-lg">
          En nuestra plataforma web vas a encontrar todo lo que estás buscando.
        </p>
      </div>
      <div className="absolute !bottom-0 -left-14 !h-[40%] !w-[40%]">
        <Image src="/banner/banner.svg" priority layout="fill" alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
