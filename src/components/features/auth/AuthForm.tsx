"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { DefaultValues, Path, useForm } from "react-hook-form";
import { z } from "zod";

type AuthType = "signIn" | "signUp";

const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const SignUpSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type SchemaType<T extends AuthType> = T extends "signUp"
  ? z.infer<typeof SignUpSchema>
  : z.infer<typeof SignInSchema>;

export const AuthForm = <T extends AuthType>({ type }: { type: T }) => {
  const isSignUp = type === "signUp";

  const form = useForm<SchemaType<T>>({
    resolver: zodResolver(isSignUp ? SignUpSchema : SignInSchema),
    defaultValues: (isSignUp
      ? { firstName: "", lastName: "", email: "", phone: "", password: "" }
      : { email: "", password: "" }) as DefaultValues<SchemaType<T>>,
  });

  function onSubmit(data: SchemaType<T>) {
    console.log(data, "Form Submitted");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        {isSignUp && (
          <>
            <FormField
              control={form.control}
              name={"firstName" as Path<SchemaType<T>>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"lastName" as Path<SchemaType<T>>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <FormField
          control={form.control}
          name={"email" as Path<SchemaType<T>>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isSignUp && (
          <FormField
            control={form.control}
            name={"phone" as Path<SchemaType<T>>}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name={"password" as Path<SchemaType<T>>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!isSignUp && (
          <h6 className="text-gray-500 text-xs text-right mt-30">
            Having issues?{" "}
            <Link className="text-primary font-semibold " href={"/"}>
              Reset Password
            </Link>
          </h6>
        )}
        <Button className="w-full" rounded={"full"} type="submit">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
      </form>
    </Form>
  );
};
