import { StatsCards } from "@/components/features/analytics/stats-cards";
import { AppointmentsCard } from "@/components/features/booking/appointments-card";
import { SchedulesCard } from "@/components/features/booking/schedules-card";
import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { stats } from "@/data/stats";
import { CalendarPlus2 } from "lucide-react";

const HomePage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
        <div>
          <h3 className="font-medium text-2xl text-[#0F1016]">Welcome Jay</h3>
          <h6 className="text-[#074762]">Manage your saloon easily</h6>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:items-end">
          <DateRangePicker />
          <Button rounded={"md"}>
            <CalendarPlus2 />
            Add Appointment
          </Button>
        </div>
      </div>
      <StatsCards stats={stats} />
      <SchedulesCard />
      <AppointmentsCard />
    </div>
  );
};

export default HomePage;
