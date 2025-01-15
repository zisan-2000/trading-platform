import Header from "@/components/dashboard/header";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <Header session={session} />
      <main className="p-6 lg:px-16">{children}</main>
    </div>
  );
};

export default DashboardLayout;
