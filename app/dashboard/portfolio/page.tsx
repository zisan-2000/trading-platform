import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


const PortfolioPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-5">Portfolio</h1>
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
      LTP: "3.8",
      HIGH: "3.2",
      LOW: "3.2	",
      CLOSEP: "3.3",
      YCP: "3.2",
      volume:"59146",
    },
    {
      name: "1STPRIMFMF",
      LTP: "29.9",
      HIGH: "29.1",
      LOW: "30.7",
      CLOSEP: "28.8",
      YCP: "29.9",
      volume:"2136964",
    },
    {
      name: "AAMRANET",
      LTP: "24.7",
      HIGH: "24.9	",
      LOW: "25.4",
      CLOSEP: "24.6",
      YCP: "24.7",
      volume: "229279",
    },
    {
      name: "AAMRATECH",
      LTP: "24.7",
      HIGH: "24.9	",
      LOW: "25.4",
      CLOSEP: "24.6",
      YCP: "24.7",
      volume: "229279",
    },
    {
      name: "ABB1STMF",
      LTP: "24.7",
      HIGH: "24.9	",
      LOW: "25.4",
      CLOSEP: "24.6",
      YCP: "24.7",
      volume: "229279",
    },
    {
      name: "ABBANK",
      LTP: "24.7",
      HIGH: "24.9	",
      LOW: "25.4",
      CLOSEP: "24.6",
      YCP: "24.7",
      volume: "229279",
    },
    {
      name: "ACFL",
      LTP: "24.7",
      HIGH: "24.9	",
      LOW: "25.4",
      CLOSEP: "24.6",
      YCP: "24.7",
      volume: "229279",
    },
    {
      name: "ACI",
      LTP: "24.7",
      HIGH: "24.9	",
      LOW: "25.4",
      CLOSEP: "24.6",
      YCP: "24.7",
      volume: "229279",
    },
    {
      name: "ACIFORMULA",
      LTP: "24.7",
      HIGH: "24.9	",
      LOW: "25.4",
      CLOSEP: "24.6",
      YCP: "24.7",
      volume: "229279",
    },
    {
      name: "ACMELAB",
      LTP: "24.7",
      HIGH: "24.9	",
      LOW: "25.4",
      CLOSEP: "24.6",
      YCP: "24.7",
      volume: "229279",
    },
    // Add more objects as needed
  ].map((item, index) => (
    <TableRow key={index}>
      <TableCell
        // onClick={() => router.push(`/dashboard/stock-details?symbol=${item.name}`)}
        className="font-medium flex items-center gap-2 cursor-pointer"
      >
        {/* <Avatar className="-z-50">
          <AvatarImage src={item.image} />
        </Avatar> */}
        <span>{item.name}</span>
      </TableCell>
      <TableCell>{item.LTP}</TableCell>
      <TableCell>{item.HIGH}</TableCell>
      <TableCell>{item.LOW}</TableCell>
      <TableCell>{item.CLOSEP}</TableCell>
      <TableCell className="text-right">{item.YCP}</TableCell>
    </TableRow>
  ))}
</TableBody>
    </Table>
    </div>
  );
};

export default PortfolioPage;
