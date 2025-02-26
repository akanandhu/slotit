import * as React from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { MultiSelect } from "@/components/ui/select-multiple";
import { StaticImageData } from "next/image";

interface MultipleSelectFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;

  name: Path<TFieldValues>;

  label?: string;

  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
    image?: string | StaticImageData;
  }[];

  placeholder?: string;

  className?: string;

  variant?: "default" | "secondary" | "destructive" | "inverted";

  animation?: number;

  maxCount?: number;

  modalPopover?: boolean;
}

export function MultipleSelectField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder = "Select options",
  className,
  variant = "default",
  animation = 0,
  maxCount = 3,
  modalPopover = false,
}: MultipleSelectFieldProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full", className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <MultiSelect
              options={options}
              placeholder={placeholder}
              defaultValue={field.value}
              onValueChange={(e) => field.onChange(e)}
              variant={variant}
              animation={animation}
              maxCount={maxCount}
              modalPopover={modalPopover}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
