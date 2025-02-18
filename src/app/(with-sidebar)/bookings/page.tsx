import { BookingsTable } from "@/components/features/booking/bookings-table";
import { Button } from "@/components/ui/button";
import { PageHead } from "@/components/ui/page-head";
import { CalendarPlus2 } from "lucide-react";

const BookingPage = () => {
  return (
    <div>
      <PageHead
        title="Booking History"
        ButtonComponent={
          <Button rounded={"md"}>
            <CalendarPlus2 />
            Add Appointment
          </Button>
        }
        breadcrumbs={[
          { href: "/dashboard", label: "Dashboard" },
          { href: "/bookings", label: "Bookings" },
        ]}
      />
      <BookingsTable />
    </div>
  );
};
export default BookingPage;
