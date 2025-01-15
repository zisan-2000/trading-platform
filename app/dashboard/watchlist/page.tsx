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
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon, TrashIcon } from "@radix-ui/react-icons";

const WatchListPage = () => {
  const handleToRemoveWatchList = (value) => {
    console.log(value);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold pb-5 flex">
        {" "}
        <BookmarkFilledIcon className="w-8 h-10 mr-2" /> Watch List
      </h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">TRADE CODE</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead>MARKET CAP</TableHead>
            <TableHead>24H</TableHead>
            <TableHead className="text-right">PRICE</TableHead>
            <TableHead className="text-right text-red-600">REMOVE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
            <TableRow>
              <TableCell>
                {/* <Avatar className="-z-50">
                  <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1669641048" />
                </Avatar> */}
                1JANATAMF
              </TableCell>
              <TableCell>1JANATAMF</TableCell>
              <TableCell>3.2</TableCell>
              <TableCell>3.3</TableCell>
              <TableCell> 0% </TableCell>
              <TableCell className="text-right">$69249</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                
                  size="icon"
                  className="h-10 w-10"
                >
                  <TrashIcon className="w-10 h-10" />
                </Button>
              </TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchListPage;
