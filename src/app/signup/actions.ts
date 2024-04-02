"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { z } from "zod";

const prisma = new PrismaClient();

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
  surname: z.string().optional(),
  companyName: z.string().optional(),
});

export async function signUpUser(
  state: null | { show: boolean; variant: "success" | "error" },
  formData: FormData,
): Promise<{ show: boolean; variant: "success" | "error" }> {
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
    return { show: true, variant: "success" };
  } catch (error) {
    console.error("Error during sign-up:", error);
    return { show: true, variant: "error" };
  }
}
