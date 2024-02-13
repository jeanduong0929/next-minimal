"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const { email, password } = values;

    try {
      const resp = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (resp && resp.status === 401) {
        form.setError("email", {
          type: "manual",
          message: "Invalid email or password",
        });
      }
    } catch (error: any) {
      console.error(error);
    }
    router.push("/dashboard");
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.handleSubmit(handleLoginSubmit)}
      >
        <FormField
          name="email"
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
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="password" placeholder="Password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          Sign In with Email
        </Button>
      </form>
    </Form>
  );
};
