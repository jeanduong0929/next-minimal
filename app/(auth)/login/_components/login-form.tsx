"use client";

import React, { Suspense } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Loading from "@/components/loading";

export const LoginForm = () => {
  const { data: session, status } = useSession();
  const [pageLoading, setPageLoading] = React.useState(true);
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  React.useEffect(() => {
    if (status !== "loading") {
      setPageLoading(false);
    }

    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [router, status]);

  const handleLoginSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const { email, password } = values;

    try {
      const resp = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (!validateStatus(resp)) {
        return;
      }
      router.push("/dashboard");
    } catch (error: any) {
      console.error(error);
    }
  };

  /* ###################################### */
  /* ########## Helper Functions ########## */
  /* ###################################### */

  const validateStatus = (resp: any) => {
    if (resp && resp.status === 401) {
      form.setError("email", {
        type: "manual",
        message: "Invalid email or password",
      });
      return false;
    }
    return true;
  };

  if (pageLoading) return <Loading />;

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
