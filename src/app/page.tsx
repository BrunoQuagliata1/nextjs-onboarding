import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import Link from "next/link";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Input } from "./_components/ui/input";
import { Checkbox } from "./_components/ui/checkbox";
import { Button, buttonVariants } from "./_components/ui/button";
import Logo from "./_components/ui/logo";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import Image from "next/image";
import { z } from "zod";
import { signIn } from "next-auth/react";

const prisma = new PrismaClient();

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex h-screen ">
      <div className="flex w-1/2 items-center justify-center bg-gradient-to-br from-[#0F58B7] to-[#62D9FF]">
        <Banner />
      </div>
      {session ? (
        <div>Hola</div>
      ) : (
        <div className="flex w-1/2 flex-col items-center justify-center">
          <SignIn />
        </div>
      )}
    </main>
  );
}

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
        <Image src="/banner/banner.svg" layout="fill" alt="banner" />
      </div>
    </div>
  );
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

async function SignIn() {
  async function SignInUser(formData: FormData) {
    "use server";

    const formDataObj = Object.fromEntries(formData.entries());

    try {
      const { email, password } = loginSchema.parse(formDataObj);
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user || !bcrypt.compareSync(password, user.password as string)) {
        throw new Error("Invalid login credentials.");
      }
      revalidatePath;
      console.log("loggeo?", user);
    } catch (error) {
      console.error("Error logging in user:", error);
      throw new Error("Error logging in user");
    }
  }

  const session = await getServerAuthSession();
  console.log("agarro la session?", session);
  // if (session?.user) return null;
  return (
    <form action={SignInUser}>
      <div className="flex w-[100%] flex-col items-center gap-4">
        <div>
          <h4 className="mb-7 font-poppins text-2xl font-medium text-black">
            ¡Hola, otra vez!
          </h4>
          <p className="mb-10 font-poppins font-normal text-black">
            Por favor, confirma tu información para ingresar a Plan IT.
          </p>
        </div>
        <div>
          <Input
            className="mb-4 "
            type="email"
            placeholder="Email"
            name="email"
          />
          <Input
            className="mb-4"
            type="password"
            placeholder="Contraseña"
            name="password"
          />
          <div className="mb-10 flex space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Recordar mi información
            </label>
          </div>
        </div>
        <Button className={buttonVariants({ variant: "primary" })}>
          INICIAR SESIÓN
        </Button>
        <div className="columns-1 flex-col text-center font-poppins leading-[108%] text-gray-400">
          <p>No tienes una cuenta aún?</p>
          <a
            href="/signup"
            className="w-56 font-poppins leading-[108%] text-blue-600 hover:text-blue-700"
          >
            Registrate acá papaaa
          </a>
        </div>
      </div>
    </form>
  );
}
