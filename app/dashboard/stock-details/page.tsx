import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  DotIcon,
} from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TreadingForm from "./TreadingForm";
import StockCharts from "../StockCharts";

const StockDetails = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
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
        <div className="flex items-center gap-4">
          <Button size="lg">
            {true ? (
              <BookmarkFilledIcon className="h-8 w-6" />
            ) : (
              <BookmarkIcon className="h-8 w-6" />
            )}
             <p>Add TO WatchList</p>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Tread</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How Much Do you want to spend?</DialogTitle>
              </DialogHeader>
              <TreadingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-14">
        <StockCharts />
      </div>
    </div>
  );
};

export default StockDetails;
