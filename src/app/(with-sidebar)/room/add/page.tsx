import { PageHead } from "@/components/ui/page-head";
import { breadcrumbs } from "../page";
import { RoomForm } from "@/components/features/room/room-form";

const RoomCreatePage = () => {
  return (
    <div className="space-y-2">
      <PageHead title="Create Shop Room" breadcrumbs={breadcrumbs}></PageHead>
      <RoomForm />
    </div>
  );
};
export default RoomCreatePage;
