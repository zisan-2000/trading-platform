import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

const WithdrawalForm = ({availableBalance,onWithdrawal}) => {
  const [amount, setAmount] = React.useState("");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
 
  const handleSubmit = () => {
    if (amount) {
      onWithdrawal(amount); // Pass the amount (as a string) to the parent component
    }
  };

  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-orange-600 text-xl font-bold px-5 py-4">
        <p className="text-white">Available balance</p>
        <p className="text-white">${availableBalance.toFixed(2)}</p>
      </div>

      <div className="flex flex-col items-center">
        <h1>Enter Withdrawal amount</h1>
        {/* Additional components or elements can go here */}
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="withdrawalInput py-7 border-none outline-none 
      focus:outline-none px-0 text-2xl text-center"
            placeholder="$9999"
            type="number"
          />
        </div>
      </div>
      <div className="pb-2">Transfer to</div>
      <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
        <img
          className="h-8 w-8"
          src="https://cdn.pixabay.com/photo/2020/02/18/11/03/bank-4859142_1280.png"
          alt=""
        />
        <div>
          <p className="text-xl font-bold">HSBC Holdings</p>
          <p className="text-xs">********1651</p>
        </div>
      </div>
      <DialogClose className="w-full" asChild>
        <Button className="w-full py-7 text-xl " onClick={handleSubmit}>
          Withdraw
        </Button>
      </DialogClose>
    </div>
  );
};

export default WithdrawalForm;
