import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  chart: {
    id: "sparkline3",
    group: "sparklines",
    type: "area",
    height: 160,
    sparkline: {
      enabled: true,
    },
  },

  stroke: {
    curve: "smooth",
    width: 2,
  },

  tooltip: {
    enabled: false,
  },
  colors: ["#98D7C2"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["#00E396"],
      inverseColors: false,
      opacityFrom: 0.7,
      opacityTo: 0.2,
      stops: [0, 100],
    },
  },
};

const chartData = [
  {
    name: "Area",
    type: "area",
    data: [30, 40, 25, 50, 49, 21, 70, 51, 60, 100],
    dataPoints: {
      marker: {
        size: 6,
        fillColor: "#98D7C2",
        strokeColor: "#98D7C2",
        strokeWidth: 2,
      },
    },
  },
  {
    name: "Bar",
    type: "column",
    data: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10],
  },
];
const Card: React.FC = () => {
  return (
    <ReactApexChart
      options={options}
      series={chartData}
      type="area"
      height={40}
      width={120}
    />
  );
};

export default Card;
