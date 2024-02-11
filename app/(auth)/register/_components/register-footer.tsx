import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const RegisterFooter = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Link href={"/login"}>
        <p className="text-blue-500 underline underline-offset-4">
          Already have an account?
        </p>
      </Link>
    </div>
  );
};
