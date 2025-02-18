import { BookingsTable } from "@/components/features/booking/bookings-table";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { CalendarPlus2 } from "lucide-react";

const BookingPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
        <Breadcrumbs
          title="Booking History"
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Bookings", href: "/bookings" },
          ]}
        />
        <div className="flex flex-col md:flex-row gap-3 md:items-end">
          <Button rounded={"md"}>
            <CalendarPlus2 />
            Add Appointment
          </Button>
        </div>
      </div>
          
      <BookingsTable />
    </div>
  );
};
export default BookingPage;
