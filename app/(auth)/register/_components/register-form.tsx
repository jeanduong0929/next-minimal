"use client";

import React from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "./register-schema";
import { instance } from "@/lib/axios-config";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToasterUtil } from "@/app/hooks/custom-toaster-hook";

export const RegisterForm = () => {
  const { success } = useToasterUtil();
  const router = useRouter();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleRegisterSubmit = async (
    values: z.infer<typeof RegisterSchema>
  ) => {
    try {
      const { email, password } = values;
      const payload = {
        email,
        password,
      };
      const { data } = await instance.post("/auth/register", payload);
      validateStatus(data.status);
      success("Account created successfully");
      router.push("/login");
    } catch (error: any) {
      console.error(error);
    }
  };

  /* ###################################### */
  /* ########## Helper Functions ########## */
  /* ###################################### */

  const validateStatus = (status: number) => {
    if (status === 409) {
      form.setError("email", {
        message: "Email already exists",
      });
    } else if (status === 400) {
      form.setError("email", {
        message: "Invalid email",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.handleSubmit(handleRegisterSubmit)}
      >
        <FormField
          name={"email"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="email" placeholder="name@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name={"password"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type={"password"} placeholder={"Password"} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          Sign Up with Email
        </Button>
      </form>
    </Form>
  );
};
