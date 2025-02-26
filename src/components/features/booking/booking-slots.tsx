import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const TimeSlotPicker = () => {
  const [selected, setSelected] = useState("09:30");

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  return (
    <ToggleGroup
      type="single"
      value={selected}
      onValueChange={(value) => setSelected(value)}
      className="flex flex-wrap justify-start gap-6"
    >
      {timeSlots.map((time, index) => (
        <ToggleGroupItem
          key={index}
          value={time}
          className="px-4 py-2 rounded-full text-gray-700 bg-gray-100 
                     data-[state=on]:border-2 data-[state=on]:border-gray-500"
        >
          {time}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default TimeSlotPicker;
