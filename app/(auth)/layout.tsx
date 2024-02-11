import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      {children}
    </div>
  );
};

export default AuthLayout;
