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
import { useState } from "react";

const Wallet = () => {
    const [walletBalance, setWalletBalance] = useState(0); // State for wallet balance
  
    const handleTopUp = (amount: string) => {
      const newBalance = walletBalance + parseFloat(amount);  // Update wallet balance
      setWalletBalance(newBalance);
    };
    const handleWithdrawal = (amount: string) => {
      // Parse the amount as a float
      const withdrawalAmount = parseFloat(amount);
    
      // Check if the amount is a valid number
      if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        alert("Please enter a valid amount greater than zero.");
        return; // Exit the function if the amount is invalid
      }
    
      // Calculate the new balance after withdrawal
      const newBalance = walletBalance - withdrawalAmount;
    
      // Check if the new balance is sufficient
      if (newBalance < 0) {
        alert("Insufficient balance");
      } else {
        // Update the wallet balance if sufficient funds are available
        setWalletBalance(newBalance);
      }
    };

    const handleTransfer = (amount : string) => {
      const newBalance = walletBalance - parseFloat(amount);
      if (newBalance < 0) {
        alert("Insufficient balance for transfer");
      } else {
        setWalletBalance(newBalance);
        alert("Transfer successful!");
      }
    };
  
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
              <span className="text-2xl font-semibold">{walletBalance.toFixed(2)}</span>
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
                  
                  <TopUpForm onTopUp={handleTopUp}/>
                  
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
                  <WithdrawalForm availableBalance={walletBalance} onWithdrawal={handleWithdrawal}/>
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
                  <TransferForm onTransfer={handleTransfer}/>
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
  {[
    {
      id: 1,
      title: "Buy Asset",
      date: "2025-01-14",
      amount: "500 USD",
      type: "buy",
    },
    {
      id: 2,
      title: "Sell Asset",
      date: "2025-01-12",
      amount: " - 200 USD",
      type: "sell",
    },
    {
      id: 3,
      title: "Buy Asset",
      date: "2025-01-10",
      amount: "800 USD",
      type: "buy",
    },
    {
      id: 4,
      title: "Transfer Funds",
      date: "2025-01-08",
      amount: " - 1,200 USD",
      type: "transfer",
    },
    {
      id: 5,
      title: "Transfer Funds",
      date: "2025-01-05",
      amount: " - 300 USD",
      type: "transfer",
    },
    {
      id: 6,
      title: "Buy Asset",
      date: "2025-01-03",
      amount: "450 USD",
      type: "buy",
    },
    {
      id: 7,
      title: "Sell Asset",
      date: "2025-01-01",
      amount: " - 350 USD",
      type: "sell",
    },
    {
      id: 8,
      title: "Buy Asset",
      date: "2024-12-30",
      amount: "900 USD",
      type: "buy",
    },
  ].map((item, i) => (
    <Card
      key={i}
      className={`flex justify-between items-center py-2 px-4 ${
        item.type === "buy"
          ? " text-green-600"
          : item.type === "sell"
          ? " text-red-600"
          : item.type === "transfer"
          ? " text-blue-600"
          : ""
          
      }`}
    >
      {/* Content goes here */}
      <div className="flex items-center gap-5">
        <Avatar>
          <AvatarFallback>
            <ShuffleIcon />
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h1>{item.title}</h1>
          <p className="text-sm text-gray-500">{item.date}</p>
        </div>
      </div>
      <div>
      <p
          className={`${
            item.type === "buy"
              ? "text-green-600"
              : item.type === "sell"
              ? "text-red-600"
              : item.type === "transfer"
              ? "text-blue-600"
              : ""
          } font-semibold text-md`}
        >{item.amount}</p>
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
