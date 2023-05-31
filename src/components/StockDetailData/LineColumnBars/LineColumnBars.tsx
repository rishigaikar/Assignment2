import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const options: ApexOptions = {
  series: [
    {
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    // {
    //   name: 'TEAM C',
    //   type: 'line',
    //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    // },
  ],
  chart: {
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth',
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
    },
  },
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: 'vertical',
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [],
  markers: {
    size: 0,
  },
  //   xaxis: {
  //     type: 'datetime',
  //   },
  //   yaxis: {
  //     title: {
  //       text: 'Points',
  //     },
  //     min: 0,
  //   },
  //   tooltip: {
  //     shared: true,
  //     intersect: false,
  //     y: {
  //       formatter: function (y: number) {
  //         if (typeof y !== 'undefined') {
  //           return y.toFixed(0) + ' points';
  //         }
  //         return y;
  //       },
  //     },
  //   },
};

const LineColumnBars: React.FC = () => {
  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="line"
      height={350}
    />
  );
};

export default LineColumnBars;
