import { Button } from "@/components/ui/button";
import { SelectField } from "../common/inputs/select-form-field";
import { TextAreaField } from "../common/inputs/text-area-form-field";
import { TextField } from "../common/inputs/text-form-field";
import { genders, rooms } from "@/data/general";
import { Control, FieldValues, Path } from "react-hook-form";

interface ServiceFormFieldsProps<T extends FieldValues> {
  control: Control<T>;
}

export const ServiceFormFields = <T extends FieldValues>({
  control,
}: ServiceFormFieldsProps<T>) => {
  return (
    <>
      <TextField<T>
        control={control}
        name={"name" as Path<T>}
        label="Category Name"
        placeholder="Type Category Name here"
      />
      <TextAreaField<T>
        control={control}
        name={"description" as Path<T>}
        placeholder="Type description here"
        label="Description"
      />
      <div className="grid grid-cols-2 gap-4">
        <TextField<T>
          control={control}
          name={"serviceCharge" as Path<T>}
          label="Charge of Service"
          placeholder="Type Service Charge here"
          type="number"
        />
        <TextField<T>
          control={control}
          name={"strikeThroughPrice" as Path<T>}
          label="Strike Through Price"
          placeholder="Type Strike Through Price here"
          type="number"
        />
      </div>
      <TextField<T>
        control={control}
        name={"duration" as Path<T>}
        label="Duration of Service"
        type="number"
        placeholder="Type duration of service here"
      />

      <div className="grid grid-cols-2 gap-4">
        <SelectField<T>
          control={control}
          name={"gender" as Path<T>}
          options={genders}
          label="Choose Gender"
          placeholder="Select Gender"
        />
        <SelectField<T>
          control={control}
          name={"room" as Path<T>}
          options={rooms}
          label="Choose Specialist"
          placeholder="Select Specialist"
        />
      </div>
      <Button rounded={"md"} type="submit">
        Submit
      </Button>
    </>
  );
};
