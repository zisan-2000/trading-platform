"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, VerifiedIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import AccountVerificationForm from "./AccountVerificationForm";
import { useSession } from "@/lib/auth-client";
import { useState } from "react";

import { KYC, StepProps } from "@/lib/dataTypes";
import { useForm } from "react-hook-form";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { Textarea } from "@/components/ui/textarea";

const Profile = () => {
  const handleEnableTwoStepVerification = () => {
    console.log("Two Step Verification");
  };
  const session = useSession();
  const [editKyc, setEditKyc] = useState(false);

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email: </p>
                  <p className="text-gray-500">{session.data?.user?.email}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name: </p>
                  <p className="text-gray-500">{session.data?.user?.name}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Date of Birth: </p>
                  <p className="text-gray-500">01/11/2001</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality: </p>
                  <p className="text-gray-500">Bangladeshi</p>
                </div>
              </div>

              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Address: </p>
                  <p className="text-gray-500">Uttara,Dhaka</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">City: </p>
                  <p className="text-gray-500">Dhaka</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Postcode: </p>
                  <p className="text-gray-500">1230</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Country: </p>
                  <p className="text-gray-500">Bangladesh</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2 Step Verification</CardTitle>
                {true ? (
                  <Badge className="space-x-2 text-white bg-green-600">
                    <VerifiedIcon />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-500">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Enable Two Step Verification</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-center">
                        Verify Your Account{" "}
                      </DialogTitle>
                    </DialogHeader>
                    <AccountVerificationForm
                      handleSubmit={handleEnableTwoStepVerification}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>KYC Status</CardTitle>

                <Badge className="space-x-2 text-white bg-green-600">
                  <VerifiedIcon />
                  <span>Verified</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setEditKyc(!editKyc)}>
                <Pencil />
                <span>Edit KYC</span>
              </Button>

              {editKyc && <UpdateKyc />}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// UpdateKyc
const UpdateKyc = () => {
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

  const form = useForm({
    defaultValues: data,
  });

  const onSubmit = async (values: Partial<KYC>) => {};

  return (
    <div className="mt-6">
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
              <Button type="submit" size="lg">
                Update
              </Button>
            </div>
          </FormFieldset>
        </form>
      </Form>
    </div>
  );
};
