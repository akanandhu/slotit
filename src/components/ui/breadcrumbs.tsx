import { ChevronRight } from "lucide-react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  title: string;
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ title, items }: BreadcrumbsProps) => {
  return (
    <div className="space-y-2">
      <h3 className="font-medium text-2xl text-[#0F1016]">{title}</h3>
      <h6 className="text-[#074762] flex items-center gap-2 text-xs">
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
            {index < items.length - 1 && <ChevronRight className="w-4 h-4" />}
          </span>
        ))}
      </h6>
    </div>
  );
};
