import React from "react";
import { Input, InputProps } from "../ui/input";

interface FormInputProps extends InputProps {
  error?: string;
}

export const FormInput = ({ error, ...props }: FormInputProps) => {
  return (
    <>
      <Input {...props} />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </>
  );
};
