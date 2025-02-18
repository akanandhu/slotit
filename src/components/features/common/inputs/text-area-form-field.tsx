import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control, FieldValues, Path } from "react-hook-form";

interface TextFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  type?: string;
}

export const TextAreaField = <T extends FieldValues>(
  props: TextFieldProps<T>
) => {
  const {
    control,
    name,
    label,
    placeholder = "Enter Text here",
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="resize-none"
              {...field}
              rows={8}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
