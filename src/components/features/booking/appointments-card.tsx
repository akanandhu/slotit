import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { columns, payments } from "@/data/data";
import { DatePickerWithPresets } from "@/components/ui/date-picker";
import { DataTable } from "@/components/ui/data-table";

export const AppointmentsCard = () => {
  return (
    <Card className=" space-y-4">
      <CardTitle className="flex items-center px-6 pt-4  justify-between">
        <h2>Appointments</h2>
        <DatePickerWithPresets />
      </CardTitle>
      <CardContent className="p-0">
        <DataTable columns={columns} data={payments} />
      </CardContent>
    </Card>
  );
};
