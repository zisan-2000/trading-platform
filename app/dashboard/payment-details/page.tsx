"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PaymentDetailsForm from "./PaymentDetailsForm";

const PaymentDetails = () => {
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>

      <Card>
        <CardHeader>
          <CardTitle>Yes Bank</CardTitle>
          <CardDescription>************16411</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <p className="w-32">A/C Holder </p>
            <p className="text-gray-400">: Birds of eden</p>
          </div>
          <div className="flex items-center">
            <p className="w-32">IFSC </p>
            <p className="text-gray-400"> : YES00008</p>
          </div>
        </CardContent>
      </Card>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="py-6 mt-5">Add Payment Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          <PaymentDetailsForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentDetails;
