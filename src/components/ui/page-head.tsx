import { BreadcrumbItem, Breadcrumbs } from "./breadcrumbs";
import React from "react";

interface Props {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  ButtonComponent?: React.ReactElement;
}

export const PageHead = (props: Props) => {
  const { title, breadcrumbs, ButtonComponent } = props;
  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
      <Breadcrumbs title={title} items={breadcrumbs} />
      {ButtonComponent && (
        <div className="flex flex-col md:flex-row gap-3 md:items-end">
          {ButtonComponent}
        </div>
      )}
    </div>
  );
};
