"use client";

import { SetStateAction } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ServiceData = {
  name: string;
  oldPrice: string;
  duration: string;
  price: string;
};

type Props = {
  data: ServiceData[];
  selectedIndices: number[];
  setSelectedIndices: React.Dispatch<SetStateAction<number[]>>;
};

export const ServiceSelection = ({
  data,
  selectedIndices,
  setSelectedIndices,
}: Props) => {
  const toggleSelection = (index: number) => {
    setSelectedIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Remove if already selected
          : [...prev, index] // Add if not selected
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <Card
          key={index}
          onClick={() => toggleSelection(index)}
          className={cn(
            "cursor-pointer border border-gray-300 rounded-xl shadow-sm p-4 transition-all",
            selectedIndices.includes(index)
              ? "border-blue-500 shadow-md bg-blue-50"
              : "bg-gray-100"
          )}
        >
          <CardContent className="p-0 flex flex-col justify-between gap-2">
            <div className="flex justify-between">
              <div className="text-base font-semibold text-black">
                {item.name}
              </div>
              <div className="text-gray-400 font-bold line-through text-sm">
                {item.oldPrice}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-xs text-grayLabel">{item.duration}</div>
              <div className="text-lg font-bold">{item.price}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
