import { StatsCards } from "@/components/features/analytics/stats-cards";
import { stats } from "@/data/stats";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <StatsCards stats={stats} />
    </div>
  );
};
export default Analytics;
