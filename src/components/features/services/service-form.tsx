"use client";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ServiceFormFields } from "./service-form-fields";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import ImageTile from "~/svg/icons/SquareIconBadge.svg";

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

  const [file, setFile] = useState<File | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      }
    },
  });

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
      <Card className="max-h-fit">
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-4">Thumbnail</h3>

          {file ? (
            <div className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt="Uploaded file"
                className="w-full h-48 object-cover rounded-lg"
              />
              <Button
                size="icon"
                variant="destructive"
                className="absolute top-2 right-2"
                rounded={'md'}
                onClick={() => setFile(null)}
              >
                <X size={16} />
              </Button>
            </div>
          ) : (
            <div
              {...getRootProps()}
              className="h-full w-full gap-2 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition"
            >
              <input {...getInputProps()} />
              <Image className="h-14 w-14" src={ImageTile} alt="Image Placeholder" />
              <p className="text-gray-600">
                Drag & drop an image here, or click to upload
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
