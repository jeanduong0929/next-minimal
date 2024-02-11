import React from "react";
import { RegisterForm } from "./_components/register-form";
import { RegisterHeader } from "./_components/register-header";
import { RegisterFooter } from "./_components/register-footer";

const RegisterPage = () => {
  return (
    <div className="flex flex-col gap-5 w-[350px]">
      <RegisterHeader />
      <RegisterForm />
      <RegisterFooter />
    </div>
  );
};

export default RegisterPage;
