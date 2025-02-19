'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageTile from "~/svg/icons/SquareIconBadge.svg";

export const ImageUpload = () => {
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
              rounded={"md"}
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
            <Image
              className="h-14 w-14"
              src={ImageTile}
              alt="Image Placeholder"
            />
            <p className="text-gray-600">
              Drag & drop an image here, or click to upload
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};
