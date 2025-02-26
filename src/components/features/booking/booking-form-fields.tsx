"use client";
import { Control, FieldValues, Path } from "react-hook-form";
import { SelectField } from "../common/inputs/select-form-field";
import { serviceTypes } from "@/data/serviceTypes";
import { MultipleSelectField } from "../common/inputs/select-multiple-field";
import { servicesList } from "@/data/service-lists";
import { rooms } from "@/data/speciality";

interface BookingFieldProps<T extends FieldValues> {
  control: Control<T>;
}

export const BookingFormFields = <T extends FieldValues>({
  control,
}: BookingFieldProps<T>) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <SelectField
        control={control}
        name={"service_type" as Path<T>}
        options={serviceTypes}
        label="Choose Service Type"
        placeholder="Choose Service Type"
      />
      <MultipleSelectField
        control={control}
        name={"services" as Path<T>}
        options={servicesList}
        label="Choose Services"
        placeholder="Choose Services"
        maxCount={5}
      />
      <SelectField
        control={control}
        name={"speciality" as Path<T>}
        options={rooms}
        label="Choose Speciality"
        placeholder="Choose Speciality"
      />
    </div>
  );
};
