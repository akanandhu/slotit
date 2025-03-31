import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import PlaceHolderImage from "~/images/placeholder-image.jpg";
import Image from "next/image";

const specialties = [
  {
    id: 1,
    name: "Speciality Name",
    description: "Description of the speciality",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Speciality Name",
    description: "Description of the speciality",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Speciality Name",
    description: "Description of the speciality",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "Speciality Name",
    description: "Description of the speciality",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "Speciality Name",
    description: "Description of the speciality",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 6,
    name: "Speciality Name",
    description: "Description of the speciality",
    image: "https://via.placeholder.com/50",
  },
];

export default function ChooseSpeciality() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {specialties.map((item) => (
          <Card
            key={item.id}
            className={`cursor-pointer transition shadow-sm ${
              selected === item.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-gray-100"
            }`}
            onClick={() => setSelected(item.id)}
          >
            <CardContent className="flex gap-4 items-center p-4">
              <Image
                src={PlaceHolderImage}
                width={91}
                height={91}
                alt="Placeholder Image"
                className="rounded-xl"
              />

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
