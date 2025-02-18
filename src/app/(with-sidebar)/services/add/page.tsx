import { ServiceForm } from "@/components/features/services/service-form";
import { BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { PageHead } from "@/components/ui/page-head";

const breadcrumbs: BreadcrumbItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/services",
    label: "Services",
  },
];

const ServiceCreatePage = () => {
  return (
    <div>
      <PageHead breadcrumbs={breadcrumbs} title="Create Shop Service" />
      <ServiceForm />
    </div>
  );
};

export default ServiceCreatePage;
