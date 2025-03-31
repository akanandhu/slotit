"use client";
import { Control, FieldValues } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { ChooseService } from "./choose-service";
import ChooseSpeciality from "./choose-specialist";

interface BookingFieldProps<T extends FieldValues> {
  control: Control<T>;
}

export const BookingFormFields = <T extends FieldValues>({}: // control,
BookingFieldProps<T>) => {
  return (
    <>
      <Card className="p-6">
        <h2 className="font-semibold text-lg mb-3">Choose Service Type</h2>
        <ChooseService />
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold text-lg mb-3">Choose Speciality</h2>
        <ChooseSpeciality />
      </Card>
    </>
  );
};
