"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import TimeSlotPicker from "./booking-slots";

export const BookingTimeSelection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex sm:flex-row flex-col gap-6">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border "
      />
      <div className="p-4 space-y-6">
        <h3 className="text-sm font-semibold ">Available Slots</h3>
        <TimeSlotPicker />
      </div>
    </div>
  );
};
