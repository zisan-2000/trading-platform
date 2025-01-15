import React from "react";
import AssetTable from "./AssetTable";
import StockCharts from "./StockCharts";
import FilterList from "./filterList";
import { DotIcon } from "@radix-ui/react-icons";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const OverviewPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.kycVerified === "PENDING") {
    redirect("/dashboard/kyc");
  }

  return (
    <>
      <div className="relative">
        <div className="lg:flex">
          <div className="lg:w-[50%] lg:border-r">
            <FilterList />
            <AssetTable />
          </div>
          <div className="hidden lg:block lg:w-[50%] p-5">
            <StockCharts />
            <div className="flex gap-5 items-center">
              <div>
                {/* <Avatar>
                  <AvatarImage
                    src={
                      "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1669641048"
                    }
                  />
                </Avatar> */}
                <p>1JANATAMF</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p>1JAN</p>
                  <DotIcon className="text-gray-400" />
                  <p className="text-gray-400">1JANATAMF</p>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-xl font-bold">2159</p>
                  <p className="text-red-600">
                    <span>59146 </span>
                    <span>(0%)</span>
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
