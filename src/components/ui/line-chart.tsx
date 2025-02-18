"use client";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Revenue",
        data: [
          50000, 62000, 70000, 85000, 78000, 92000, 100000, 112000, 125000,
        ],
        color: "#074762",
      },
      {
        name: "Sales",
        data: [10, 12, 15, 18, 16, 20, 22, 25, 28], // Sales in %
        color: "#F86624",
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: { enabled: false },
        toolbar: {
          show: false,
        },
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3 },
      title: { text: "", align: "left" },
      grid: { row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 } },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      yaxis: [
        {
          title: { text: "" },
          labels: {
            formatter: (value: number) => `₹${value.toLocaleString()}`,
          },
        },
        {
          opposite: true,
          title: { text: "" },
          labels: { formatter: (value: number) => `${value}%` },
        },
      ],
      legend: { position: "top", horizontalAlign: "right" },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options as ApexOptions}
          series={state.series}
          type="line"
          height={300}
        />
      </div>
    </div>
  );
};
export default LineChart;