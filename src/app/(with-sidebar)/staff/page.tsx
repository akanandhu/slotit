import { StaffCards } from "@/components/features/staff/staff-cards";
import { Button } from "@/components/ui/button";
import { PageHead } from "@/components/ui/page-head";
import { breadcrumbs } from "@/data/breadcrumbs/staff";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <PageHead
        title="Shop Staffs"
        ButtonComponent={
          <Link href={"/staff/add"}>
            <Button rounded={"md"}>
              <Plus />
              Add Staff
            </Button>
          </Link>
        }
        breadcrumbs={breadcrumbs}
      />
      <StaffCards />
    </div>
  );
}
