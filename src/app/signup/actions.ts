"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const prisma = new PrismaClient();

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
  surname: z.string().optional(),
  companyName: z.string().optional(),
});

export async function signUpUser(formData: FormData) {
  const formDataObject: Record<string, string | undefined> = {};
  formData.forEach((value, key) => {
    formDataObject[key] = typeof value === "string" ? value : undefined;
  });

  try {
    const { password, ...validatedData } = signUpSchema.parse(formDataObject);

    await prisma.user.create({
      data: {
        password: bcrypt.hashSync(password, 10),
        ...validatedData,
      },
    });
    revalidatePath("/");
    return { message: "User created successfully" };
  } catch (error) {
    console.error("Error during sign-up:", error);
  }
}
