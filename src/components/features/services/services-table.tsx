import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns, serviceData } from "@/data/services-data";

export const ServicesTable = () => {
  return (
    <Card className="mt-6 space-y-4">
      <CardTitle className="flex items-center px-6 pt-4  justify-between">
        <h2>Services</h2>
      </CardTitle>
      <CardContent className="p-0">
        <DataTable columns={columns} data={serviceData} />
      </CardContent>
    </Card>
  );
};
