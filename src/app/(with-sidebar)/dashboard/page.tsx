import { Button } from "@/components/ui/button";
import { CalendarDays, CalendarPlus2 } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium text-2xl text-[#0F1016]">Welcome Jay</h3>
          <h6 className="text-[#074762] text-lg">Manage your saloon easily</h6>
        </div>
        <div className="flex gap-3 items-end">
          <Button variant={"secondary"} rounded={"md"}>
            <CalendarDays />
            Select Dates
          </Button>
          <Button rounded={"md"}>
            <CalendarPlus2 />
            Add Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
