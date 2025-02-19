import { PageHead } from "@/components/ui/page-head";
import { StaffForm } from "@/components/features/staff/staff-form";
import { breadcrumbs } from "@/data/breadcrumbs/staff";

const StaffCreatePage = () => {
  return (
    <div>
          <PageHead breadcrumbs={breadcrumbs} title="Create Shop Staff" />
          <StaffForm />
        </div>
  )
};

export default StaffCreatePage;
