import React from "react";
import { Sidebar } from "./_components/sidebar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-10 py-5">
      <Sidebar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
