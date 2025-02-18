"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const LineChart = dynamic(() => import("@/components/ui/line-chart"), {
  ssr: false,
  loading: () => (
    <>
      <Skeleton className=" p-4 my-2 h-[300px] w-full" />
    </>
  ),
});

const RevenueChart = () => {
  return (
    <Card className="p-4">
      <h2 className="font-medium text-xl ">Statistics</h2>
      <h5 className="text-xs text-gray-400">Revenue and Sales</h5>
      <CardContent>
        <LineChart />
      </CardContent>
    </Card>
  );
};
export default RevenueChart;
