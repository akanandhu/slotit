"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TextField } from "../common/inputs/text-form-field";
import { TextAreaField } from "../common/inputs/text-area-form-field";
import { SelectField } from "../common/inputs/select-form-field";
import { genders, rooms } from "@/data/general";

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
    <div className="mt-6 grid grid-cols-[3fr_1fr]">
      <Card className="p-6">
        <h2 className="font-semibold text-lg mb-3">General Information</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <TextField
              control={form.control}
              name="name"
              label="Category Name"
              placeholder="Type Category Name here"
            />
            <TextAreaField
              control={form.control}
              name="description"
              placeholder="Type description here"
              label="Description"
            />
            <div className="grid grid-cols-2 gap-4">
              <TextField
                control={form.control}
                name="serviceCharge"
                label="Charge of Service"
                placeholder="Type Service Charge here"
                type="number"
              />
              <TextField
                control={form.control}
                name="strikeThroughPrice"
                label="Strike Through Price"
                placeholder="Type Strike Through Price here"
                type="number"
              />
            </div>
            <TextField
              control={form.control}
              name="duration"
              label="Duration of Service"
              type="number"
              placeholder="Type duration of service here"
            />

            <div className="grid grid-cols-2 gap-4">
              <SelectField
                control={form.control}
                name="gender"
                options={genders}
                label="Choose Gender"
                placeholder="Select Gender"
              />
              <SelectField
                control={form.control}
                name="room"
                options={rooms}
                label="Choose Room"
                placeholder="Select Room"
              />
            </div>
            <Button rounded={"md"} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};
