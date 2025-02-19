import { BookingsTable } from "@/components/features/booking/bookings-table";
import { Button } from "@/components/ui/button";
import { PageHead } from "@/components/ui/page-head";
import { CalendarPlus2 } from "lucide-react";
import Link from "next/link";

const BookingPage = () => {
  return (
    <div>
      <PageHead
        title="Booking History"
        ButtonComponent={
          <Link href={'/bookings/add'}>
            <Button rounded={"md"}>
              <CalendarPlus2 />
              Add Appointment
            </Button>
          </Link>
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
