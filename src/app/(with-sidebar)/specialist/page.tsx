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
        title="Shop Specialist"
        ButtonComponent={
          <Link href={"/specialist/add"}>
            <Button rounded={"md"}>
              <Plus />
              Add Specialist
            </Button>
          </Link>
        }
      />
      <RoomCards />
    </div>
  );
}
