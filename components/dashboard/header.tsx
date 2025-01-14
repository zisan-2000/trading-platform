"use client";

import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Button } from "@/components/ui/button";
import { ChevronDown, LogOut, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const session = useSession();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b px-6 dark:bg-[#0C0A09]">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon" className="shrink-0">
              <DragHandleHorizontalIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-72 border-r-0 flex flex-col" side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="text-xl flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_1280.png" />
                  </Avatar>
                  <div>
                    <span className="font-bold text-orange-500">Boed</span>
                    <span>Trading</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2 h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
          <MagnifyingGlassIcon className="size-5" />
          <input
            type="search"
            placeholder="Search..."
            className="focus:outline-none focus:border-0 w-full dark:bg-[#0C0A09]"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
              <Avatar>
                <AvatarImage
                  src="https://i.pravatar.cc/40?img=12"
                  alt="Profile image"
                />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <ChevronDown className="opacity-60" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="max-w-64">
            <DropdownMenuLabel className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-medium text-foreground">
                {session.data?.user?.name}
              </span>
              <span className="truncate text-sm font-medium text-muted-foreground">
                {session.data?.user?.email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => router.push("/dashboard/profile")}
              >
                <UserRound className="opacity-60" aria-hidden="true" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                <LogOut className="opacity-60" aria-hidden="true" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
