import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns, roomData } from "@/data/room-analytics";

export const RoomAnalytics = () => {
  return (
    <Card className=" space-y-4">
      <CardTitle className="flex items-center px-6 pt-4  justify-between">
        <h2>Specialist Analytics</h2>
      </CardTitle>
      <CardContent className="p-0">
        <DataTable columns={columns} data={roomData} />
      </CardContent>
    </Card>
  );
};
