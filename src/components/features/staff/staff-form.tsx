"use client";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextField } from "../common/inputs/text-form-field";
import { ImageUpload } from "../common/inputs/image-upload";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PasswordField } from "../common/inputs/password-field";

const formSchema = z.object({
  name: z.string().min(2, "Staff Name is required and must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  phoneNumber: z.string().regex(/^(\+91)?[6789]\d{9}$/, "Enter a valid 10-digit Indian phone number."),
});

export const StaffForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="mt-6 grid grid-rows-1 lg:grid-cols-[2fr_1fr] xl:grid-cols-[3fr_1fr] gap-6">
      <Card className="p-6">
        <h2 className="font-semibold text-lg mb-3">Staff Information</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <TextField
              control={form.control}
              name="name"
              label="Staff Name"
              placeholder="Enter Staff Name here"
            />

            <TextField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter Email here"
              type="email"
            />

            <PasswordField control={form.control} name="password"  />

            <TextField
              control={form.control}
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter Phone Number here"
            />

            <Button rounded={'md'} type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
      <ImageUpload />
    </div>
  );
};
