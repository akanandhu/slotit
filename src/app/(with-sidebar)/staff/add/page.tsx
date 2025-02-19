import { PageHead } from "@/components/ui/page-head";
import { breadcrumbs } from "../page";
import { StaffForm } from "@/components/features/staff/staff-form";

const StaffCreatePage = () => {
  return (
    <div>
          <PageHead breadcrumbs={breadcrumbs} title="Create Shop Staff" />
          <StaffForm />
        </div>
  )
};

export default StaffCreatePage;
