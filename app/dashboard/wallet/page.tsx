"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DownloadIcon,
  ReloadIcon,
  ShuffleIcon,
  UpdateIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import { CopyIcon, DollarSign, WalletIcon } from "lucide-react";
import TopUpForm from "./TopUpForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Wallet = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card className="border-primary">
          {/*Wallet Header Start*/}
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletIcon size={30} />
                <div>
                  <CardTitle className="text-2xl">My Wallet</CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 text-sm">#A475Ed</p>
                    <CopyIcon
                      size={12}
                      className="cursor-pointer hover:text-slate-300"
                    />
                  </div>
                </div>
              </div>
              <div>
                <ReloadIcon className="w-6 h-6 cursor-pointer hover:text-gray-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign />
              <span className="text-2xl font-semibold">4400.56</span>
            </div>
            {/*Wallet Header End*/}
            {/*Wallet -> Add Money ,Withdrawal ,Transfer Fomrs Start*/}
            <div className="flex gap-7 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div
                    className="h-24 w-24 hover:text-primary cursor-pointer flex flex-col 
            items-center justify-center rounded-md ring-2 ring-offset-4 ring-primary/50"
                  >
                    <UploadIcon className="size-6" />
                    <span className="text-sm mt-2">Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Top Up Your Wallet</DialogTitle>
                  </DialogHeader>
                  <TopUpForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div
                    className="h-24 w-24 hover:text-primary cursor-pointer flex flex-col 
            items-center justify-center rounded-md ring-2 ring-offset-4 ring-primary/50"
                  >
                    <DownloadIcon className="size-6" />
                    <span className="text-sm mt-2">Withdrawal</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request Withdrawal</DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div
                    className="h-24 w-24 hover:text-primary cursor-pointer flex flex-col 
            items-center justify-center rounded-md ring-2 ring-offset-4 ring-primary/50"
                  >
                    <ShuffleIcon className="size-6" />
                    <span className="text-sm mt-2">Transfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl">
                      Transfer To Other Wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
            {/*Wallet -> Add Money ,Withdrawal ,Transfer Fomrs End*/}
          </CardContent>
        </Card>
        {/*Wallet -> History Start*/}
        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-2xl font-semibold">History</h1>
            <UpdateIcon className="h-7 w-7 p-0 cursor-pointer hover:text-gray-400" />
          </div>

          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
              <Card
                key={i}
                className="flex justify-between items-center py-2 px-4"
              >
                {/* Content goes here */}
                <div className="flex items-center gap-5">
                  <Avatar>
                    <AvatarFallback>
                      <ShuffleIcon className="" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h1>Buy Asset</h1>
                    <p className="text-sm text-gray-500">2025-01-14</p>
                  </div>
                </div>
                <div>
                  <p className="text-primary">500 USD</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/*Wallet -> History End*/}
      </div>
    </div>
  );
};

export default Wallet;
