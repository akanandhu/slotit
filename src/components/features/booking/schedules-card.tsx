"use client";
import { Card, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";

const SchedulerChart = dynamic(() => import("@/components/ui/scheduler"), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

export const SchedulesCard = () => {
  return (
    <Card className="p-4 rounded-xl">
      <CardTitle className="font-medium p-3 leading-7 text-[#1F2937]">
        Today&apos;s Room Schedule
      </CardTitle>
      <div className="p-3">
        <SchedulerChart />
      </div>
    </Card>
  );
};
