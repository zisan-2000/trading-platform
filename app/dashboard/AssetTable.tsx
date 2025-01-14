"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

const AssetTable = () => {
  const router = useRouter();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Coin</TableHead>
          <TableHead>SYMBOL</TableHead>
          <TableHead>VOLUME</TableHead>
          <TableHead>MARKET CAP</TableHead>
          <TableHead>24H</TableHead>
          <TableHead className="text-right">PRICE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <TableRow key={index}>
            <TableCell
              onClick={() => router.push(`/dashboard/stock-details`)}
              className="font-medium flex items-center gap-2 cursor-pointer"
            >
              <Avatar className="-z-50">
                <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1669641048" />
              </Avatar>
              <span>Bitcoin</span>
            </TableCell>
            <TableCell>BTC</TableCell>
            <TableCell>9124463121</TableCell>
            <TableCell>1364881428323</TableCell>
            <TableCell> - 0.20009 </TableCell>
            <TableCell className="text-right">$69249</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssetTable;
