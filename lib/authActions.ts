"use server";

import * as yup from "yup";
import { db } from "./db";
import { signUpSchema } from "@/validators/authValidators";
import bcrypt from "bcryptjs";

// Get User By ID
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch {
    return null;
  }
};

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

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      message: "Account created successfully",
    };
  } catch {
    return { error: "Invalid email or password" };
  }
};
