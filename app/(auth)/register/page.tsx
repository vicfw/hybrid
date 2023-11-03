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
import { useRegister } from "@/hooks/pageHooks/useRegister";
import { appName } from "@/lib/constants/appName";
import Head from "next/head";
import Link from "next/link";

const RegisterPage = () => {
  const { get, set, on } = useRegister();

  return (
    <>
      <Head>
        <title>{`${appName} | ثبت نام`}</title>
      </Head>
      <div className="container items-start">
        {/* login */}
        <div className="flex w-full justify-center items-center text-right">
          <div className="bg-gray-200 py-10 px-7 rounded-md w-full h-full max-w-[400px]">
            <p className="text-2xl text-center">Hybrid Task</p>
            <Form {...get.form}>
              <form
                onSubmit={get.form.handleSubmit(on.onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={get.form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                  Register
                </Button>
              </form>
            </Form>
            <Separator className="my-4 bg-black w-3/4 mx-auto" />
            <div className="text-center">
              <p className="mb-1">Have account ?</p>
              <Link href="/login">
                <span className="text-primary">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
