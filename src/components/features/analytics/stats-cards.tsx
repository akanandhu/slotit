import { StatsCard } from "./stats-card";

export interface Stats {
  label: string;
  value: number;
  subLabel: string;
  icon: string
}

export const StatsCards = ({ stats }: { stats: Stats[] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        return <StatsCard key={stat.label} stat={stat} />;
      })}
    </div>
  );
};
