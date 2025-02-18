import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
  import { Control, FieldValues, Path } from "react-hook-form";
  
  interface SelectFieldProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label?: string;
    placeholder?: string;
    options: { label: string; value: string }[];
  }
  
  export const SelectField = <T extends FieldValues>({
    name,
    control,
    label,
    placeholder = "Select an option",
    options,
  }: SelectFieldProps<T>) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };
  