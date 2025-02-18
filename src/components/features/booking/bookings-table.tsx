import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { DatePickerWithPresets } from "@/components/ui/date-picker";
import { appointmentData, columns } from "@/data/booking-data";

export const BookingsTable = () => {
  return (
    <Card className="mt-6 space-y-4">
      <CardTitle className="flex items-center px-6 pt-4  justify-between">
        <h2>Appointments</h2>
        <DatePickerWithPresets />
      </CardTitle>
      <CardContent className="p-0">
        <DataTable columns={columns} data={appointmentData} />
      </CardContent>
    </Card>
  );
};
