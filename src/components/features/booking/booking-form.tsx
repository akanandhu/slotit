"use client";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { BookingFormFields } from "./booking-form-fields";
import { Card } from "@/components/ui/card";
import { BookingTimeSelection } from "./booking-time-selection";
import { BookingCustomerForm } from "./booking-customer-form";

const formSchema = z.object({
  //   servie_type: z.string().min(2, "Service Type is required.").max(50),
  //   speciality: z.string().min(1, "Room is required."),
  //   services: z.string().min(1, "Room is required."),
  //   name: z.string().min(2, "Name is required"),
  //   email: z.string().email({ message: "Invalid Email" }),
  //   phone: z
  //     .string()
  //     .regex(
  //       /^(\+91)?[6789]\d{9}$/,
  //       "Enter a valid 10-digit Indian phone number."
  //     ),
});

export const BookingForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      //   name: "",
      //   email: "",
      //   phone: "",
      services: [],
      //   servie_type: "",
      //   speciality: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, "SubmitValues");
  }
  return (
    <div className="mt-6 grid grid-rows-1 gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <BookingFormFields control={form.control} />
          <Card className="p-6">
            <h2 className="font-semibold text-lg mb-3">Choose Date and Time</h2>

            <BookingTimeSelection />
          </Card>
          <Card className="p-6">
            <h2 className="font-semibold text-lg mb-3">Booking Details</h2>

            <BookingCustomerForm control={form.control} />
          </Card>
        </form>
      </Form>
    </div>
  );
};
