"use server";

import * as yup from "yup";
import { db } from "./db";
import { signUpSchema } from "@/validators/authValidators";
import { redirect } from "next/navigation";

// Get User By Email
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch {
    return null;
  }
};

// Sign up user
export const signUp = async (values: yup.InferType<typeof signUpSchema>) => {
  try {
    const { name, email, password } = await signUpSchema.validate(values, {
      abortEarly: false,
    });

    // Check existing user
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: "Email already exist" };
    }

    await db.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    redirect("/dashboard");
  } catch {
    throw new Error("Invalid sign-up request");
  }
};
