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
          <TableHead className="w-[100px]">TRADE CODE</TableHead>
          <TableHead>LTP</TableHead>
          <TableHead>OPEN</TableHead>
          <TableHead>HIGH</TableHead>
          <TableHead>LOW</TableHead>
          <TableHead className="text-right">CLOSE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
  {[
    {
      name: "1JANATAMF",
      symbol: "1JAN",
      holdings: "3.2",
      marketCap: "3.2	",
      change: "3.3",
      price: "3.2",
      volume:"59146",
    },
    {
      name: "1STPRIMFMF",
      symbol: "29.9",
      holdings: "29.1",
      marketCap: "30.7",
      change: "28.8",
      price: "29.9",
      volume:"2136964",
    },
    {
      name: "AAMRANET",
      symbol: "24.7",
      holdings: "24.9	",
      marketCap: "25.4",
      change: "24.6",
      price: "24.7",
      volume: "229279",
    },
    {
      name: "AAMRANET",
      symbol: "24.7",
      holdings: "24.9	",
      marketCap: "25.4",
      change: "24.6",
      price: "24.7",
      volume: "229279",
    },
    {
      name: "AAMRANET",
      symbol: "24.7",
      holdings: "24.9	",
      marketCap: "25.4",
      change: "24.6",
      price: "24.7",
      volume: "229279",
    },
    {
      name: "AAMRANET",
      symbol: "24.7",
      holdings: "24.9	",
      marketCap: "25.4",
      change: "24.6",
      price: "24.7",
      volume: "229279",
    },
    {
      name: "AAMRANET",
      symbol: "24.7",
      holdings: "24.9	",
      marketCap: "25.4",
      change: "24.6",
      price: "24.7",
      volume: "229279",
    },
    // Add more objects as needed
  ].map((item, index) => (
    <TableRow key={index}>
      <TableCell
        onClick={() => router.push(`/dashboard/stock-details?symbol=${item.symbol}`)}
        className="font-medium flex items-center gap-2 cursor-pointer"
      >
        {/* <Avatar className="-z-50">
          <AvatarImage src={item.image} />
        </Avatar> */}
        <span>{item.name}</span>
      </TableCell>
      <TableCell>{item.symbol}</TableCell>
      <TableCell>{item.holdings}</TableCell>
      <TableCell>{item.marketCap}</TableCell>
      <TableCell>{item.change}</TableCell>
      <TableCell className="text-right">{item.price}</TableCell>
    </TableRow>
  ))}
</TableBody>
    </Table>
  );
};

export default AssetTable;
