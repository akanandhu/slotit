import { PageHead } from "@/components/ui/page-head";
import { RoomForm } from "@/components/features/room/room-form";
import { breadcrumbs } from "@/data/breadcrumbs/room";

const RoomCreatePage = () => {
  return (
    <div className="space-y-2">
      <PageHead title="Create Shop Specialist" breadcrumbs={breadcrumbs}></PageHead>
      <RoomForm />
    </div>
  );
};
export default RoomCreatePage;
