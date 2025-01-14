import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

const Navbar = () => {
  return (
    <nav className="border-b border-border py-3 dark:bg-[#0C0A09] bg-white">
      <div className="container flex items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-bold">
          Birds Of Eden
        </Link>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Button asChild>
            <Link href="/auth/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
