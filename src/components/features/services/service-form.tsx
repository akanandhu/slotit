"use client";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ServiceFormFields } from "./service-form-fields";
import { ImageUpload } from "../common/inputs/image-upload";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required and must be at least 2 characters.")
    .max(50),
  description: z.string().optional(),
  serviceCharge: z.coerce.number().min(0, "Service charge must be 0 or more."),
  strikeThroughPrice: z.coerce
    .number()
    .min(0, "Strike-through price must be 0 or more."),
  duration: z.coerce.number().min(1, "Duration must be greater than zero."),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender is required.",
  }),
  room: z.string().min(1, "Room is required."),
});

export const ServiceForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      duration: 0,
      gender: undefined,
      room: "",
      serviceCharge: 0,
      strikeThroughPrice: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="mt-6 grid grid-rows-1 lg:grid-cols-[2fr_1fr]  xl:grid-cols-[3fr_1fr] gap-6">
      <Card className="p-6">
        <h2 className="font-semibold text-lg mb-3">General Information</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <ServiceFormFields control={form.control} />
          </form>
        </Form>
      </Card>
      <ImageUpload />
    </div>
  );
};
