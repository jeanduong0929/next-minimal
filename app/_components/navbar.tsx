"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CommandIcon, Loader2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { UserDropdown } from "./user-dropdown";

const Navbar = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  return (
    <nav className="flex items-center justify-between min-h-20">
      {/* Left */}
      <Link href={"/"} className="flex items-center gap-2 ">
        <CommandIcon className="w-8 h-8" />
        <h2 className="text-2xl font-bold">Minimal</h2>
      </Link>

      {/* Right */}
      {isLoading ? (
        <Loader2Icon className="w-8 h-8 animate-spin" />
      ) : session ? (
        <UserDropdown />
      ) : (
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
