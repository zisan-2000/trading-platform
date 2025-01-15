import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";



const TopUpForm = ({onTopUp}) => {
    const [amount, setAmount] = React.useState('');
    const [paymentMethod , setPaymentMethod] = React.useState("RAZORPAY");
     
    const handlePaymentMethodChange = (value) => {
        setPaymentMethod(value);
      };
      

    const handleChange = (e) => {
      setAmount(e.target.value);
    };
    const handleSubmit = () => {
      if (amount) {
        onTopUp(amount); // Pass the amount (as a string) to the parent component
      }
    };
      
    return (
      <div className="pt-10 space-y-5">
        <div>
          <h1 className="pb-1">Enter Amount</h1>
          <Input
            onChange={handleChange}
            value={amount}
            className="py-7 text-lg"
            placeholder="$9999"
          />
        </div>

        <div>
        <h1 className="pb-1">Select payment method</h1>
        <RadioGroup 
        onValueChange={(value) => handlePaymentMethodChange(value) }
        className="flex" 
        defaultValue="RAZORPAY">
        <div className="flex items-center space-x-2 border p-3 px-5 
        rounded-md">
            <RadioGroupItem 
            icon={DotFilledIcon}
            className="h-9 w-9"
            value="RAZORPAY"
            id="r1"
            />
            <Label htmlFor="r1">
            <div className="bg-white rounded-md px-5 py-2 w-32">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/2560px-HSBC_logo_%282018%29.svg.png" 
                alt="" 
                />
            </div>
            </Label>

            

        </div>

        <div className="flex items-center space-x-2 border p-3 px-5 
        rounded-md">
            <RadioGroupItem 
            icon={DotFilledIcon}
            className="h-9 w-9"
            id="r2"
            value ="STRIPE"
            />
            <Label htmlFor="r2">
            <div className="bg-white rounded-md px-5 w-32">
            <img 
            className="h-9"
            src="https://banner2.cleanpng.com/20180908/buh/kisspng-logo-barclays-bank-barclays-wealth-investment-ma-barclays-logo-svg-vector-amp-png-transparent-v-1713942779508.webp" 
            alt="" 
            />
            </div>
            </Label>

            

        </div>
        </RadioGroup>
        </div>
       <DialogClose className="w-full" asChild>
       <Button onClick={handleSubmit} className="w-full py-7">
            Submit
        </Button>
       </DialogClose>

      </div>
    );
    
}

export default TopUpForm