import React from "react";
import { CommandIcon } from "lucide-react";

export const RegisterHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <CommandIcon className="w-8 h-8" />
      <h1 className="text-2xl font-bold">Create an account</h1>
      <p className="text-sm text-slate-500">
        Enter your email below to create your account
      </p>
    </div>
  );
};
