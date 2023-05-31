import React from 'react';
import './watchlist.scss';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface StockCardProps {
  data: {
    name: string;
    percent: string;
    price: number;
    type: string;
  };
}

const StockCard: React.FC<StockCardProps> = ({ data }) => {
  ////////// area chart data ////////
  const options: ApexOptions = {
    chart: {
      id: 'sparkline3',
      group: 'sparklines',
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true,
      },
    },

    stroke: {
      curve: 'smooth',
      width: 2,
    },

    tooltip: {
      enabled: false,
    },
    colors: [data.type === 'positive' ? '#98D7C2' : '#cc5801'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: [data.type === 'positive' ? '#98D7C2' : '#cc5801'],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
  };

  const chartData = [
    {
      name: 'Area',
      type: 'area',
      data:
        data.type === 'positive'
          ? [30, 40, 25, 50, 49, 21, 70, 51, 60, 100]
          : [30, 40, 25, 50, 49, 21, 70, 51, 60, 30],
      dataPoints: {
        marker: {
          size: 6,
          fillColor: data.type === 'positive' ? '#98D7C2' : '#cc5801',
          strokeColor: data.type === 'positive' ? '#98D7C2' : '#cc5801',
          strokeWidth: 2,
        },
      },
    },
  ];
  ////////// area chart data end////////
  return (
    <div className="stockcard" style={{ paddingTop: '20px' }}>
      <div className="innercardSection">
        <div className="leftSection">
          <div className="apexcard">
            <ReactApexChart
              options={options}
              series={chartData}
              type="area"
              height={50}
              width={50}
            />
          </div>

          <span>{data.name}</span>
        </div>
        <div className="rightSection">
          <div className="prices-percent">
            <span
              className="percent"
              style={{
                backgroundColor:
                  data.type === 'positive' ? '#98D7C2' : '#cc5801',
              }}
            >
              {data.percent}
            </span>
            <span
              className="price"
              style={{
                color: data.type === 'positive' ? '#98D7C2' : '#cc5801',
              }}
            >
              {data.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
