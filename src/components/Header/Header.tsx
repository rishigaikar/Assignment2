import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const Header: React.FC = () => {
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
    // colors: ["#008FFB"],
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
          fillColor: "#ffffff",
          strokeColor: "#FF4560",
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
  return (
    <div className="header">
      <div className="rowflex">
        <div className="">
          <span>BSE LTD</span>
          <ReactApexChart
            options={options}
            series={chartData}
            type="area"
            height={50}
            width={50}
          />
        </div>

        <div>nifty</div>
      </div>
      <div className="rowflex">
        <FontAwesomeIcon icon={faSearch} style={{ color: "black" }} />
        <div className="bell">
          <FontAwesomeIcon icon={faBell} style={{ color: "white" }} />
          <span style={{ color: "white" }}>11</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
