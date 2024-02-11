"use client";

import React from "react";
import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button";

export const RegisterForm = () => {
  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleRegisterSubmit}>
      <FormInput
        className="w-full"
        type="email"
        placeholder="name@example.com"
      />
      <FormInput className="w-full" type="password" placeholder="Password" />
      <Button className="w-full" type="submit">
        Sign Up with Email
      </Button>
    </form>
  );
};
