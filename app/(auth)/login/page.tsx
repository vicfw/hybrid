"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLogin } from "@/hooks/pageHooks/useLogin";
import Link from "next/link";

const LoginPage = () => {
  const { get, set, on } = useLogin();

  return (
    <div className="container flex  items-start">
      {/* login */}
      <div className="flex justify-center items-center text-right w-full">
        <div className="bg-gray-200 py-10 px-7 rounded-md w-full h-full max-w-[400px]">
          <p className="text-2xl text-center">Hybrid Task</p>
          <Form {...get.form}>
            <form
              onSubmit={get.form.handleSubmit(on.onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={get.form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={get.form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Password..."
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full" type="submit">
                Login
              </Button>
            </form>
          </Form>
          <Separator className="my-4 bg-black w-3/4 mx-auto" />
          <div className="text-center mt-3">
            <p className="mb-1">Need new account ?</p>
            <Link href="register">
              <span className="text-primary">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
