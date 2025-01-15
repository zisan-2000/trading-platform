import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const ActivityPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-5 flex"> Activity</h1>
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Date & Time</TableHead>
      <TableHead>Trading Pair</TableHead>
      <TableHead>Buy Price</TableHead>
      <TableHead>Selling Price</TableHead>
      <TableHead>Order Type</TableHead>
      <TableHead className="text-right">Profit/Loss</TableHead>
      <TableHead className="text-right">Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[
      {
        date: "2025/01/12",
        time: "11:24:55",
        tradingPair: "1JANATAMF",
        buyPrice: "3.2",
        sellingPrice: "3.3",
        orderType: "Buy",
        profitLoss: "-0.1",
        value: "$59146",
      },
      {
        date: "2025/01/12",
        time: "12:15:34",
        tradingPair: "1STPRIMFMF",
        buyPrice: "29.1",
        sellingPrice: "28.8",
        orderType: "Sell",
        profitLoss: "-0.3",
        value: "$2136964",
      },
      {
        date: "2025/01/12",
        time: "13:45:21",
        tradingPair: "AAMRANET",
        buyPrice: "24.9",
        sellingPrice: "24.6",
        orderType: "Buy",
        profitLoss: "-0.3",
        value: "$229279",
      },
      {
        date: "2025/01/12",
        time: "14:22:11",
        tradingPair: "AAMRATECH",
        buyPrice: "24.9",
        sellingPrice: "24.6",
        orderType: "Buy",
        profitLoss: "-0.3",
        value: "$229279",
      },
      {
        date: "2025/01/12",
        time: "15:05:45",
        tradingPair: "ABB1STMF",
        buyPrice: "24.9",
        sellingPrice: "24.6",
        orderType: "Sell",
        profitLoss: "-0.3",
        value: "$229279",
      },
      {
        date: "2025/01/12",
        time: "16:18:37",
        tradingPair: "ABBANK",
        buyPrice: "24.9",
        sellingPrice: "24.6",
        orderType: "Buy",
        profitLoss: "-0.3",
        value: "$229279",
      },
      {
        date: "2025/01/12",
        time: "17:43:29",
        tradingPair: "ACFL",
        buyPrice: "24.9",
        sellingPrice: "24.6",
        orderType: "Sell",
        profitLoss: "-0.3",
        value: "$229279",
      },
      {
        date: "2025/01/12",
        time: "18:34:12",
        tradingPair: "ACI",
        buyPrice: "24.9",
        sellingPrice: "24.6",
        orderType: "Buy",
        profitLoss: "-0.3",
        value: "$229279",
      },
      {
        date: "2025/01/12",
        time: "19:45:50",
        tradingPair: "ACIFORMULA",
        buyPrice: "24.9",
        sellingPrice: "24.6",
        orderType: "Sell",
        profitLoss: "-0.3",
        value: "$229279",
      },
    ].map((item, index) => (
      <TableRow key={index}>
        <TableCell>
          <p>{item.date}</p>
          <p className="text-gray-400">{item.time}</p>
        </TableCell>
        <TableCell>{item.tradingPair}</TableCell>
        <TableCell>{item.buyPrice}</TableCell>
        <TableCell>{item.sellingPrice}</TableCell>
        <TableCell>{item.orderType}</TableCell>
        <TableCell className="text-right">{item.profitLoss}</TableCell>
        <TableCell className="text-right">{item.value}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

    </div>
  );
};

export default ActivityPage;
