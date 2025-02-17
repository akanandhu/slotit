"use client";
import { Scheduler } from "@bitnoi.se/react-scheduler";
import dayjs from "dayjs";
import { SetStateAction, useCallback, useState } from "react";
import isBetween from "dayjs/plugin/isBetween";
import { mockedSchedulerData } from "@/data/scheduler";

dayjs.extend(isBetween);

export default function SchedulerChart() {

  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleRangeChange = useCallback((range: SetStateAction<{ startDate: Date; endDate: Date; }>) => {
    setRange(range);
  }, []);

  
  const filteredMockedSchedulerData = mockedSchedulerData.map((person) => ({
    ...person,
    data: person.data.filter(
      (project) =>
        // we use "dayjs" for date calculations, but feel free to use library of your choice
        dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
        dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
        (dayjs(project.startDate).isBefore(range.startDate, "day") &&
          dayjs(project.endDate).isAfter(range.endDate, "day"))
    ),
  }));

  return (
    <section className="relative flex min-h-72">
      <Scheduler
        data={filteredMockedSchedulerData}
        // isLoading={isLoading}
        onRangeChange={handleRangeChange}
        config={{
          zoom: 2,
          filterButtonState: -1,
          maxRecordsPerPage: 4
        }}
      />
    </section>
  );
}


