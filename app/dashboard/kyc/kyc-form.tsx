"use client";

import { KYC, StepProps } from "@/lib/dataTypes";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle,
  LoaderCircleIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

import {
  Form,
  FormControl,
  FormField,
  FormFieldset,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import ImageSelector from "@/components/ui/image-selector";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "@/lib/auth-client";
import { updateKyc } from "@/actions/userAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const KYCForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<KYC>({
    fullName: "John Doe",
    dateOfBirth: "1990-01-01",
    birthPlace: "Dhaka, Bangladesh",
    gender: "male",
    nationality: "Bangladeshi",
    country: "Bangladesh",
    permanentAddress: "1234 Elm Street, Dhaka, Bangladesh",
    currentAddress: "5678 Oak Avenue, Dhaka, Bangladesh",
    phone: "+8801234567890",
    postalCode: "1212",
    nid: "123456789012",
    bloodGroup: "O+",
    dateOfIssue: "2015-05-20",
    fatherName: "Ahmed Kabir",
    motherName: "Rina Begum",
    documentType: "",
    nidFront: "",
    nidBack: "",
    confirmation: false,
  });

  const handleNextStep = (newData: Partial<KYC>, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      // Post request on final step
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData: Partial<KYC>) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  // Animation variants for steps
  const stepVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 },
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  // All Steps
  const steps = [
    {
      title: "Step 1",
      component: <StepOne next={handleNextStep} data={data} />,
    },
    {
      title: "Step 2",
      component: (
        <StepTow next={handleNextStep} prev={handlePrevStep} data={data} />
      ),
    },
    {
      title: "Finish",
      component: (
        <StepFinish
          next={handleNextStep}
          currentStep={currentStep}
          prev={handlePrevStep}
          data={data}
        />
      ),
    },
  ];

  return (
    <div className="bg-slate-50 grow rounded-xl ring-2 ring-offset-2 ring-slate-100 overflow-hidden">
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-2 p-8 flex flex-col h-[calc(100vh-112px)]">
          {/* Timeline */}
          <div className="max-w-4xl w-full flex items-center justify-between mt-6 mb-10 mx-auto">
            {steps.map((step, index) => {
              // const isCurrentStep = index === currentStep
              const isCompletedStep = index <= currentStep;

              return (
                <div
                  key={index}
                  className={`flex-1 flex flex-col items-center relative ${
                    index < steps.length - 1 ? "pr-4" : ""
                  }`}
                >
                  {/* Step Circle */}
                  <div
                    className={cn(
                      "relative z-10 flex items-center justify-center rounded-full size-10 ring-1 ring-offset-2",
                      {
                        "bg-slate-100 ring-slate-300": !isCompletedStep,
                        "bg-orange-100 ring-orange-300": isCompletedStep,
                      }
                    )}
                  >
                    {/* Inner Icon */}
                    {isCompletedStep ? (
                      <Check className="text-orange-500 size-6" />
                    ) : (
                      <Check className="text-slate-400 size-6" />
                    )}
                  </div>
                  {/* Step Title */}
                  <p
                    className={`mt-2 text-center text-lg ${
                      isCompletedStep ? "text-orange-400" : "text-slate-400"
                    }`}
                  >
                    {step.title}
                  </p>
                  {/* Line between steps */}
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "absolute left-full -translate-x-1/2 top-5 -translate-y-1/2 h-0.5 w-full",
                        {
                          "bg-slate-200": !isCompletedStep,
                          "bg-orange-300": isCompletedStep,
                        }
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Forms */}
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {steps[currentStep].component}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative col-span-1 h-full">
          <Image src="/placeholder.svg" alt="banner" fill objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

// Step One
const StepOne = ({ data, next }: StepProps<KYC>) => {
  const form = useForm({
    defaultValues: data,
  });

  const onSubmit = async (values: Partial<KYC>) => {
    next(values);
  };

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl mb-2 text-slate-600">
          Upload a proof of your identity
        </h2>
        <p className="text-lg text-slate-400">
          Trading requires a valid government issue ID (driver license,
          password, national id)
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormFieldset
            disabled={form.formState.isSubmitting}
            className="grid grid-cols-2 items-center gap-8 max-w-4xl mx-auto"
          >
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Country</FormLabel>
                  <FormControl>
                    <CountryDropdown
                      placeholder="Select your country"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="documentType"
              render={({ field }) => (
                <FormItem className="!mt-0">
                  <FormLabel>Document Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nid">National ID</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="documentType"
              render={() => (
                <FormItem>
                  <FormControl>
                    <ImageSelector
                      title="Front side of your document"
                      description="Supports: JPG, PNG, PDF and up to 5mb"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="documentType"
              render={() => (
                <FormItem>
                  <FormControl>
                    <ImageSelector
                      title="Back side of your document"
                      description="Supports: JPG, PNG, PDF and up to 5mb"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2 text-right">
              <Button type="submit" size="lg">
                <span>Next</span>
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </FormFieldset>
        </form>
      </Form>
    </div>
  );
};

// Step Two
const StepTow = ({ data, next, prev }: StepProps<KYC>) => {
  const form = useForm({
    defaultValues: data,
  });

  const onSubmit = async (values: Partial<KYC>) => {
    next(values);
  };

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl mb-2 text-slate-600">
          Your identity information
        </h2>
        <p className="text-lg text-slate-400">
          Please check your personal information and make sure it&apos;s correct
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormFieldset
            disabled={form.formState.isSubmitting}
            className="grid grid-cols-2 items-center gap-x-8 gap-y-4 max-w-4xl mx-auto"
          >
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date of Birth Field */}
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="!mt-0">
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="Date of Birth" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Birth Place Field */}
            <FormField
              control={form.control}
              name="birthPlace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birth Place</FormLabel>
                  <FormControl>
                    <Input placeholder="Birth Place" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Gender Field */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country Field */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <CountryDropdown
                      placeholder="Select your country"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Nationality Field */}
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <CountryDropdown
                      placeholder="Select your country"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Permanent Address Field */}
            <FormField
              control={form.control}
              name="permanentAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Permanent Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Permanent Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Current Address Field */}
            <FormField
              control={form.control}
              name="currentAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Current Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Postal Code Field */}
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Postal Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* NID Field */}
            <FormField
              control={form.control}
              name="nid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NID</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="NID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Blood Group Field */}
            <FormField
              control={form.control}
              name="bloodGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blood Group</FormLabel>
                  <FormControl>
                    <Input placeholder="Blood Group" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date of Issue Field */}
            <FormField
              control={form.control}
              name="dateOfIssue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Issue</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="Date of Issue" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Father's Name Field */}
            <FormField
              control={form.control}
              name="fatherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father&apos;s Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Father's Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mother's Name Field */}
            <FormField
              control={form.control}
              name="motherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother&apos;s Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Mother's Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2 flex justify-between gap-4 items-center">
              <Button
                onClick={() => {
                  if (prev) {
                    prev(form.getValues());
                  }
                }}
                type="button"
                size="lg"
                className="bg-slate-200 text-slate-700 hover:bg-slate-200/70"
              >
                <ArrowLeft className="size-5" />
                <span>Previous</span>
              </Button>
              <Button type="submit" size="lg">
                <span>Next</span>
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </FormFieldset>
        </form>
      </Form>
    </div>
  );
};

// Step Finish
const StepFinish = ({
  prev,
  currentStep,
}: StepProps & { currentStep: number }) => {
  const router = useRouter();
  const [kycVerified, setKycVerified] = useState(false);
  const { data } = useSession();

  // Run the effect only when we're on the final step
  useEffect(() => {
    if (currentStep !== 2) return;

    const timer = setTimeout(async () => {
      try {
        const { message } = await updateKyc(data?.user.id as string);
        if (message) {
          toast.success(message);
          setKycVerified(true);
          router.replace("/dashboard");
        }
      } catch {
        console.log("error verifying kyc");
      }
    }, 5000); // 5 seconds delay

    // Cleanup the timer when the component unmounts or currentStep changes
    return () => clearTimeout(timer);
  }, [currentStep, data, router]);

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl mb-2 text-slate-600">Thank you</h2>
        <p className="text-lg text-slate-400">
          Your KYC application has been submitted successfully
        </p>
      </div>

      <div
        className={cn(
          "text-center max-w-2xl mx-auto rounded-lg px-4 py-10 ring-2 ring-offset-4 ",
          {
            "bg-primary/10 ring-primary/30": !kycVerified,
            "bg-emerald-50 ring-emerald-400": kycVerified,
          }
        )}
      >
        <h3
          className={cn("text-2xl w-fit mb-1 flex items-center gap-2 mx-auto", {
            "text-primary": !kycVerified,
            "text-emerald-600": kycVerified,
          })}
        >
          {kycVerified ? (
            <CheckCircle />
          ) : (
            <LoaderCircleIcon className="animate-spin" />
          )}
          <span>{kycVerified ? "Verified" : "Pending Review"}</span>
        </h3>

        {kycVerified ? (
          <p className="text-lg text-slate-800">Your KYC is now verified</p>
        ) : (
          <p className="text-lg text-slate-700">
            Your application is pending review by our system
          </p>
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-8 flex justify-between gap-4 items-center">
        <Button
          onClick={() => {
            if (prev) {
              prev({});
            }
          }}
          type="button"
          size="lg"
          className="bg-slate-200 text-slate-700 hover:bg-slate-200/70"
        >
          <ArrowLeft className="size-5" />
          <span>Previous</span>
        </Button>
      </div>
    </div>
  );
};

export default KYCForm;
