import { RoomCards } from "@/components/features/room/room-cards";
import { Button } from "@/components/ui/button";
import { PageHead } from "@/components/ui/page-head";
import { Plus } from "lucide-react";

const breadcrumbs = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Room",
    href: "/room",
  },
];

const RoomsPage = () => {
  return (
    <div className="space-y-6">
      <PageHead
        breadcrumbs={breadcrumbs}
        title="Shop Rooms"
        ButtonComponent={
          <Button rounded={"md"}>
            <Plus />
            Add Room
          </Button>
        }
      />
      <RoomCards />
    </div>
  );
};
export default RoomsPage;
