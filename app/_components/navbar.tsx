import { Button } from "@/components/ui/button";
import { CommandIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      {/* Left */}
      <Link href={"/"} className="flex items-center gap-2 ">
        <CommandIcon className="w-8 h-8" />
        <h2 className="text-2xl font-bold">Minimal</h2>
      </Link>

      {/* Right */}
      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
