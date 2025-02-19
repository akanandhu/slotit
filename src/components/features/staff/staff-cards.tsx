import { StaffCard } from "./staff-card";

export const StaffCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      <StaffCard />
      <StaffCard />
      <StaffCard />
      <StaffCard />
      <StaffCard />
    </div>
  );
};
