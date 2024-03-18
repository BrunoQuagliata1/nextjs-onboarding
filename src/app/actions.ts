"use server";

import { z } from "zod";
import { signIn } from "next-auth/react";
import { revalidatePath } from "next/cache";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

async function SignInUser(formData: FormData) {
  const formDataObj = Object.fromEntries(formData.entries());

  const { email, password } = loginSchema.parse(formDataObj);

  console.log("email passowrd", email, password);

  try {
    const result = await signIn("credentials", {
      email,
      password,
    });

    console.log("anduvo esto?", result);

    if (result?.error) {
      console.error(result.error);
      return;
    } else {
      console.log("Success");
      revalidatePath("/");
    }
  } catch (error) {
    console.error("Error logging in user:", error);
  }
}

export default SignInUser;
