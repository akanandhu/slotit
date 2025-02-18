import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

interface TextFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  type?: string;
}

export const TextField = <T extends FieldValues>(props: TextFieldProps<T>) => {
  const {
    control,
    name,
    label,
    placeholder = "Enter Text here",
    type = "text",
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder ?? "Enter Text here"}
              {...field}
              onWheel={(e) => (e.target as HTMLElement).blur()}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
