"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { revalidatePath } from "next/cache";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.error("Error signing in:", result);
    } else {
      console.log("Successfully signed in:", result);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="mb-4"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
};

export default SignIn;
