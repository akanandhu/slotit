import { RoomCards } from "@/components/features/room/room-cards";
import { Button } from "@/components/ui/button";
import { PageHead } from "@/components/ui/page-head";
import { breadcrumbs } from "@/data/breadcrumbs/room";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function RoomPage() {
  return (
    <div className="space-y-6">
      <PageHead
        breadcrumbs={breadcrumbs}
        title="Shop Rooms"
        ButtonComponent={
          <Link href={"/room/add"}>
            <Button rounded={"md"}>
              <Plus />
              Add Room
            </Button>
          </Link>
        }
      />
      <RoomCards />
    </div>
  );
}
