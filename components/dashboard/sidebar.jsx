import {
  ActivityLogIcon,
  BookmarkIcon,
  DashboardIcon,
  ExitIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { CreditCardIcon, LandmarkIcon, WalletIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

const menu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <HomeIcon className="size-5" />,
  },
  {
    name: "My Portfolio",
    path: "/dashboard/portfolio",
    icon: <DashboardIcon className="size-5" />,
  },
  {
    name: "WatchList",
    path: "/dashboard/watchlist",
    icon: <BookmarkIcon className="size-5" />,
  },
  {
    name: "Activity",
    path: "/dashboard/activity",
    icon: <ActivityLogIcon className="size-5" />,
  },
  {
    name: "My Wallet",
    path: "/dashboard/wallet",
    icon: <WalletIcon className="size-5" />,
  },
  {
    name: "Payment Details",
    path: "/dashboard/payment-details",
    icon: <LandmarkIcon className="size-5" />,
  },
  {
    name: "Withdrawal",
    path: "/dashboard/withdrawal",
    icon: <CreditCardIcon className="size-5" />,
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <ScrollArea className="mt-10">
      <nav className="flex flex-col gap-4">
        {menu.map((item) => (
          <SheetClose key={item.name} className="w-full" asChild>
            <button
              onClick={() => router.push(item.path)}
              className="flex items-center gap-3 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-2.5"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          </SheetClose>
        ))}
      </nav>
    </ScrollArea>
  );
};

export default Sidebar;
