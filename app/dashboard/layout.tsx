import Header from "@/components/dashboard/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="p-6 lg:px-16">{children}</main>
    </div>
  );
};

export default DashboardLayout;
