"use client";

import { Button, buttonVariants } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { signUpUser } from "./actions";

export function SignUp() {
  return (
    <form
      action={signUpUser}
      className="mx-12 flex w-full flex-col items-start gap-4 max-sm:mx-4 max-sm:w-[93%]"
    >
      <h4 className="text-2xl font-medium">¡Bienvenido a Plan IT!</h4>
      <p>
        Por favor, complete su información personal para crear un usuario
        propio.
      </p>
      <p className=" text-gray-500">
        ¿Ya tenés una cuenta?{" "}
        <a
          href="/api/auth/signin"
          className="w-56 text-blue-600 hover:text-blue-700"
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
