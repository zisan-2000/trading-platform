"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const updateKyc = async (userId: string) => {
  await db.users.update({
    where: {
      id: userId,
    },
    data: {
      kycVerified: "VERIFIED",
    },
  });

  revalidatePath("/dashboard", "layout");

  return {
    message: "KYC verified",
  };
};

export const getKycStatus = async (userId: string) => {
  const kycStatus = await db.users.findUnique({
    where: {
      id: userId,
    },
  });

  return { kycStatus };
};
