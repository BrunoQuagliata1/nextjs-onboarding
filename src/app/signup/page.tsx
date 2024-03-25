import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Button, buttonVariants } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { z } from "zod";
import Banner from "../_components/banner";

const prisma = new PrismaClient();

export default async function SignUp() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="hidden bg-custom-gradient sm:flex sm:w-1/2">
        <Banner />
      </div>
      <div className="flex w-full items-center justify-center sm:w-1/2">
        <SignUp_ />
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

async function SignUp_() {
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

  return (
    <form
      action={signUpUser}
      className="mx-12 flex w-full flex-col items-start gap-4 max-sm:mx-4 max-sm:w-[93%]"
    >
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
      <div className="mb-5 flex w-full flex-col gap-8">
        <Input type="name" placeholder="Nombre" name="name" />
        <Input type="surname" placeholder="Apellido" name="surname" />
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Contraseña" name="password" />
        <Input
          type="company-name"
          placeholder="Nombre de la Empresa"
          name="companyName"
        />
      </div>
      <Button className={buttonVariants({ variant: "primary" })}>
        REGISTRARSE
      </Button>
    </form>
  );
}
