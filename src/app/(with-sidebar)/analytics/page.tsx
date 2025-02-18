import { RoomAnalytics } from "@/components/features/analytics/analytics-table";
import RevenueChart from "@/components/features/analytics/revenue-chart";
import { StatsCards } from "@/components/features/analytics/stats-cards";
import { stats } from "@/data/stats";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <StatsCards stats={stats} />
      <RevenueChart />
      <RoomAnalytics />
    </div>
  );
};
export default Analytics;
