import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Withdrawal = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-5 flex"> Withdrawal</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date </TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>12th Jan, 2025 at 02:16 PM</p>
              </TableCell>
              <TableCell>
                <p>Bank</p>
              </TableCell>
              <TableCell>$100</TableCell>
              <TableCell className="w-5 h-3 gap-3 text-right bg-green-500 rounded-full">
                Complete
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
