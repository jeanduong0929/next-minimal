"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LoginForm = () => {
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleLoginSubmit}>
      <Input className="w-full" type="email" placeholder="name@example.com" />
      <Input className="w-full" type="password" placeholder="Password" />
      <Button className="w-full" type="submit">
        Sign In with Email
      </Button>
    </form>
  );
};
