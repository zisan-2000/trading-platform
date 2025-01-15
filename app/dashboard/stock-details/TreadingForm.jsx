"use client";

// import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const TreadingForm = () => {
 
  const [orderType, setOrderType] = useState("BUY");
  const handleChange = () => {};
  return (
    <div className="space-y-10 p-5">
      <div className="flex gap-4 items-center justify-between">
        <Input
          className="py-7 focus:outline-none "
          placeholder="Enter Amount..."
          onChange={handleChange}
          type="number"
          name="amount"
        />
        <div>
          <p
            className="text-2xl border flex justify-center 
        items-center w-36 h-14 rounded-md"
          >
            4653
          </p>
        </div>
      </div>
      {false && (
        <h1 className="text-red-500 text-center pt-4">
          Insufficent Wallet Balance To Buy
        </h1>
      )}
      <div className="flex gap-5 items-center">
        <div>
          {/* <Avatar>
            <AvatarImage
              src={
                "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1669641048"
              }
            />
          </Avatar> */}
          <div className="flex items-center gap-2">
            <p>1JANATAMF</p>
            <DotIcon className="text-gray-400" />
            <p className="text-gray-400">1JANATAMF</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-xl font-bold"> 59146</p>
            <p className="text-red-600">
              <span> 3.2</span>
              <span> (0%)</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>Order Type</p>
        <p>Market Order</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{orderType == "BUY" ? "Availabel Cash" : "Availabel Quantity"}</p>
        <p>{orderType == "BUY" ? `$4000` : 20.08}</p>
      </div>
      <div>
        <Button
          className={`w-full py-6 
                ${orderType == "SELL" ? "bg-red-500 text-white" : ""}`}
        >
          {orderType}
        </Button>
        <Button
          variant="links"
          className="w-full mt-5 text-xl "
          onClick={() => setOrderType(orderType === "BUY" ? "SELL" : "BUY")}
        >
          {orderType == "Buy" ? "Or Sell" : "Or Buy"}
        </Button>
      </div>
    </div>
  );
};

export default TreadingForm;
