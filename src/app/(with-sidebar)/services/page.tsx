import { ServicesTable } from "@/components/features/services/services-table";
import { Button } from "@/components/ui/button";
import { PageHead } from "@/components/ui/page-head";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbs = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Services",
    href: "/services",
  },
];

const ServicesPage = () => {
  return (
    <div>
      <PageHead
        title="Shop Services"
        ButtonComponent={
          <Link href={'/services/add'}>
            <Button rounded={"md"}>
              <Plus />
              Add Service
            </Button>
          </Link>
        }
        breadcrumbs={breadcrumbs}
      />

      <ServicesTable />
    </div>
  );
};

export default ServicesPage;
