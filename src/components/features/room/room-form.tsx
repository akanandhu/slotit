'use client'
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextField } from "../common/inputs/text-form-field";
import { ImageUpload } from "../common/inputs/image-upload";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextAreaField } from "../common/inputs/text-area-form-field";


const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

export const RoomForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form Data:", values);
  };

  return (
    <div className="mt-6 grid grid-rows-1 lg:grid-cols-[2fr_1fr] xl:grid-cols-[3fr_1fr] gap-6">
      <Card className="p-6">
        <h2 className="font-semibold text-lg mb-3">General Information</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <TextField
              control={form.control}
              name="name"
              label="Specialist Name"
              placeholder="Enter Specialist Name here"
            />

            <TextAreaField control={form.control} name="description" label="Description" placeholder="Enter Description here"  />

            <Button rounded={'md'} type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
      <ImageUpload />
    </div>
  );
};
