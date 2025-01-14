"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    label: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    label: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_Monthly",
    key: "Monthly Time Series",
    label: "1 Month",
    value: 30,
  },
];

const StockCharts = () => {
  const [activeLabel, setActiveLabel] = useState("1 Day");
  const series = [
    {
      data: [
        [17533446253, 62934.256],
        [17533446598, 62800.408],
        [17533446943, 62957.604],
        [17533447288, 62950.803],
        [17533447633, 62980.998],
        [17533447978, 62735.197],
        [17533448323, 62945.396],
        [17533448668, 62655.594],
        [17533449013, 62735.794],
        [17533449358, 62995.992],
        [17533449703, 62486.192],
        [17533450048, 62776.391],
        [17533450393, 62946.69],
        [17533450738, 62236.89],
        [17533451083, 62156.19],
        [17533451428, 62489.189],
        [17533451773, 62538.389],
        [17533452118, 62157.589],
        [17533452463, 62287.788],
        [17533452808, 62457.989],
        [17533453153, 62358.189],
        [17533453498, 62698.388],
        [17533453843, 62778.588],
        [17533454188, 62888.788],
        [17533454533, 62998.988],
        [17533454878, 62269.189],
        [17533455223, 62789.389],
        [17533455568, 62539.59],
        [17533455913, 62689.791],
      ],
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabeles: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#ffa73b"],
    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      size: 0,
      strokeWidth: 1,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };
  const handleActiveLabel = (value) => {
    setActiveLabel(value);
  };
  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            variant={activeLabel == item.label ? "" : "outline"}
            onClick={() => handleActiveLabel(item.label)}
            key={item.label}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          height={450}
          type="area"
        />
      </div>
    </div>
  );
};

export default StockCharts;
