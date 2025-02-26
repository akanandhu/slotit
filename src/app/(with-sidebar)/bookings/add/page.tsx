import { BookingForm } from "@/components/features/booking/booking-form";
import { PageHead } from "@/components/ui/page-head";
import { breadcrumbs } from "@/data/breadcrumbs/booking";

export default function BookingCreatePage() {
  return (
    <div>
      <PageHead breadcrumbs={breadcrumbs} title="Create Booking" />
      <BookingForm />
    </div>
  );
}
