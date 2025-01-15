import { auth } from "@/lib/auth";
import KYCForm from "./kyc-form";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const KycPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.kycVerified === "VERIFIED") {
    redirect("/dashboard");
  }

  return <KYCForm />;
};

export default KycPage;
