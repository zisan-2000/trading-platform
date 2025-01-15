import {  Html } from "@react-email/components";
import { Heading } from "lucide-react";
import * as React from "react";

type WelcomeProps ={
  name: string
};

export default function Welcome({name}: WelcomeProps) {
  return (
    <Html>
      <Heading>Welcome, {name}!</Heading>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
  <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
    <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
      Email Verification Code
    </h1>
    <p className="text-gray-600 text-center mb-6">
      Please use the following One-Time Password (OTP) to verify your email. This code is valid for 10 minutes.
    </p>
    <div className="flex justify-center items-center bg-gray-50 border border-gray-200 rounded-md py-4">
      <span className="text-3xl font-bold text-gray-800">
        {Math.floor(100000 + Math.random() * 900000)}
      </span>
    </div>
    <p className="text-gray-600 text-sm text-center mt-6">
      If you didn’t request this, please ignore this email or contact support for assistance.
    </p>
    
    </div>
  </div>


    </Html>
  );
}
