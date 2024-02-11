import { CommandIcon } from "lucide-react";
import React from "react";

export const LoginHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <CommandIcon className="w-8 h-8" />
      <h1 className="text-2xl font-bold">Welcome back</h1>
      <p className="text-sm text-slate-500">
        Enter your email to sign in to your account
      </p>
    </div>
  );
};
