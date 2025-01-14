"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import AssetTable from "./AssetTable";
import StockCharts from "./StockCharts";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DotIcon } from "@radix-ui/react-icons";

const OverviewPage = () => {
  const [category, setCategory] = React.useState("all");
  const handleCategory = (value: string) => {
    setCategory(value);
  };
  return (
    <>
      <div className="relative">
        <div className="lg:flex">
          <div className="lg:w-[50%] lg:border-r">
            <div className="p-3 flex items-center gap-4">
              <Button
                onClick={() => handleCategory("all")}
                variant={category == "all" ? "default" : "outline"}
                className="rounded-full"
              >
                All
              </Button>
              <Button
                onClick={() => handleCategory("top50")}
                variant={category == "top50" ? "default" : "outline"}
                className="rounded-full"
              >
                Top 50
              </Button>
              <Button
                onClick={() => handleCategory("topGainers")}
                variant={category == "topGainers" ? "default" : "outline"}
                className="rounded-full"
              >
                Top Gainers
              </Button>
              <Button
                onClick={() => handleCategory("topLosers")}
                variant={category == "topLosers" ? "default" : "outline"}
                className="rounded-full"
              >
                Top Losers
              </Button>
            </div>
            <AssetTable />
          </div>
          <div className="hidden lg:block lg:w-[50%] p-5">
            <StockCharts />

            <div className="flex gap-5 items-center">
              <div>
                <Avatar>
                  <AvatarImage
                    src={
                      "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1669641048"
                    }
                  />
                </Avatar>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p>BTC</p>
                  <DotIcon className="text-gray-400" />
                  <p className="text-gray-400">Bitcoin</p>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-xl font-bold">$69249</p>
                  <p className="text-red-600">
                    <span>1364881428323</span>
                    <span>(- 0.20009%)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
