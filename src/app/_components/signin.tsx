"use client";
import { useState } from "react";

import { signIn } from "next-auth/react";

import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

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
      throw new Error("Error signing in");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-12 flex w-full flex-col items-center gap-4 max-sm:mx-4 max-sm:w-[93%]"
    >
      <div className="flex w-full flex-col gap-4">
        <h4 className="text-2xl font-medium ">¡Hola, otra vez!</h4>
        <p>Por favor, confirma tu información para ingresar a Plan IT.</p>
      </div>

      <div className=" flex w-full flex-col gap-4">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mb-5 space-x-2">
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

      <div className="flex-col text-center text-gray-400">
        <p>No tienes una cuenta aún?</p>
        <a href="/signup" className="text-blue-600 hover:text-blue-700">
          Registrate acá papaaa
        </a>
      </div>
    </form>
  );
};

export default SignIn;
