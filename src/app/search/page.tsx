import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Button, buttonVariants } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { z } from "zod";
import Banner from "../_components/banner";
import { NavigationMenuDemo } from "../_components/filter";
import Card from "../_components/gift-card";

const prisma = new PrismaClient();

export default async function Search() {
  return (
    <main className="m-20 flex h-screen flex-col">
      <div className=" flex  w-60 flex-col gap-3.5">
        <h6 className="text-[20px] font-normal leading-[108%] tracking-tight text-gray-900">
          Regalos
        </h6>
        <h4 className="text-[35px] font-medium leading-[108%] text-gray-900">
          Food Box
        </h4>
        <p className="text-[18px] font-normal leading-[108%] tracking-tight text-gray-400">
          Más de 30 opciones
        </p>
      </div>
      <NavigationMenuDemo />
      <Card />
    </main>
  );
}
