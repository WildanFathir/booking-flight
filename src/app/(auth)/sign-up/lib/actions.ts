"use server";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { userSchema } from "./validation";
import { redirect } from "next/navigation";

import bcrypt from "bcrypt";
import prisma from "../../../../../lib/prisma";

export async function signUpUser(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const validate = userSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    passport: formData.get("passport"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const hashingPassword = bcrypt.hashSync(validate.data.password, 10);

  await prisma.user.create({
    data: {
      name: validate.data.name,
      email: validate.data.email,
      password: hashingPassword,
      passport: validate.data.passport,
      role: "CUSTOMER",
    },
  });

  return redirect("/sign-in");
}
