import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Button, buttonVariants } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { z } from "zod";
import Banner from "../_components/banner";

const prisma = new PrismaClient();

export default async function SignUp() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  console.log("session", session);

  return (
    <main className="flex h-screen ">
      <div className="flex w-1/2 items-center justify-center bg-gradient-to-br from-[#0F58B7] to-[#62D9FF]">
        <Banner />
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center">
        <SignIn />
      </div>
    </main>
  );
}

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
  surname: z.string().optional(),
  companyName: z.string().optional(),
});

async function SignIn() {
  async function signUpUser(formData: FormData) {
    "use server";

    const formDataObj: Record<string, string | undefined> = {};
    formData.forEach((value, key) => {
      formDataObj[key] = typeof value === "string" ? value : undefined;
    });

    try {
      const validatedData = signUpSchema.parse(formDataObj);
      await prisma.user.create({
        data: {
          email: validatedData.email,
          password: bcrypt.hashSync(validatedData.password, 10),
          ...(validatedData.name && { name: validatedData.name }),
          ...(validatedData.surname && { surname: validatedData.surname }),
          ...(validatedData.companyName && {
            companyName: validatedData.companyName,
          }),
        },
      });
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  }

  const session = await getServerAuthSession();
  return (
    <form action={signUpUser}>
      <div className="flex w-[100%] flex-col items-center gap-4">
        <div>
          <h4 className="mb-7 font-poppins text-2xl font-medium text-black">
            ¡Bienvenido a Plan IT!
          </h4>
          <p className="mb-10 font-poppins font-normal text-black">
            Por favor, complete su información personal para crear un usuario
            propio.
          </p>
          <p className="mb-10 font-poppins font-normal text-gray-500">
            ¿Ya tenés una cuenta?{" "}
            <a
              href="/api/auth/signin"
              className="w-56 font-poppins leading-[108%] text-blue-600 hover:text-blue-700"
            >
              Inicia sesión aquí.
            </a>
          </p>
        </div>
        <div>
          <Input
            className="mb-4 "
            type="name"
            placeholder="Nombre"
            name="name"
          />
          <Input
            className="mb-4"
            type="surname"
            placeholder="Apellido"
            name="surname"
          />
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
          <Input
            className="mb-4"
            type="company-name"
            placeholder="Nombre de la Empresa"
            name="companyName"
          />
        </div>
        <Button className={buttonVariants({ variant: "primary" })}>
          REGISTRARSE
        </Button>
      </div>
    </form>
  );
}
