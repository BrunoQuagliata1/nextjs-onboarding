"use server";

import { z } from "zod";
import { useState } from "react";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
  password: z.string({
    invalid_type_error: "Invalid Password",
  }),
});

export default async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
}
