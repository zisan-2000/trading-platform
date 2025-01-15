import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

const TransferForm = ({onTransfer}) => {
  const [formData, setFormData] = React.useState({
    amount: "",
    walletId: "",
    purpose: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = () => {
    if (formData.amount) {
      onTransfer(formData.amount); // Pass the amount to the parent component
    }
  };

  return (
    <div>
      <div className="pt-10 space-y-5">
        <div>
          <h1 className="pb-1">Enter Amount</h1>
          <Input
            name="amount"
            onChange={handleChange}
            value={formData.amount}
            className="py-7"
            placeholder="$9999"
          />
        </div>
      </div>
      <div className="pt-10 space-y-5">
        <div>
          <h1 className="pb-1">Wallet ID</h1>
          <Input
            name="walletId"
            onChange={handleChange}
            value={formData.walletId}
            className="py-7"
            placeholder="#ADER455"
          />
        </div>
      </div>
      <div className="pt-10 space-y-5">
        <div>
          <h1 className="pb-1">Purspose</h1>
          <Input
            name="purpose"
            onChange={handleChange}
            value={formData.purpose}
            className="py-7"
            placeholder="Write your purpose...."
          />
        </div>
      </div>
      <DialogClose className="w-full" asChild>
        <Button onClick={handleSubmit} className="w-full py-7 mt-5">
          Submit
        </Button>
      </DialogClose>
    </div>
  );
};

export default TransferForm;
