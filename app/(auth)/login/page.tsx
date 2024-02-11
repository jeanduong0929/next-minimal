import React from "react";
import { LoginForm } from "./_components/login-form";
import { LoginHeader } from "./_components/login-header";
import { LoginFooter } from "./_components/login-footer";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-5 w-[350px]">
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </div>
  );
};

export default LoginPage;
