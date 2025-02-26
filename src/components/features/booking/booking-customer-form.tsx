import { Control, FieldValues, Path } from "react-hook-form";
import { TextField } from "../common/inputs/text-form-field";
import { Button } from "@/components/ui/button";

interface Props<T extends FieldValues> {
  control: Control<T>;
}

export const BookingCustomerForm = <T extends FieldValues>({
  control,
}: Props<T>) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <TextField
        control={control}
        name={"name" as Path<T>}
        label="Client Name"
        placeholder="Type Client Name here"
      />
      <TextField
        control={control}
        name={"email" as Path<T>}
        label="Email"
        placeholder="Type email here"
        type="email"
      />
      <TextField
        control={control}
        name={"phone" as Path<T>}
        label="Phone"
        placeholder="Type Phone number here"
      />
      <div>
        <Button className="rounded-md" type="submit">Submit</Button>
      </div>
    </div>
  );
};
