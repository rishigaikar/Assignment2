import React from 'react';
import './stockDetails.scss';
import LineColumnBars from './LineColumnBars/LineColumnBars';
import BuySellChart from './BuySellChart/BuySellChart';

interface ApexChartProps {}
const StockDetails: React.FC = () => {
  return (
    <div className="stockDetails">
      <span className="commanfontcolor">INFOSYS LTD</span>
      <span className="commanfontcolor">INFY|NSE</span>
      <div className="linecolumnbars">
        <LineColumnBars></LineColumnBars>
      </div>
      <div className="secondsection">
        <div className="buysell">
          <BuySellChart></BuySellChart>
        </div>
        <div className="volumn">
          <span className="commanfontcolor">Volumn</span>
          <div className="inner-volumn">
            <div className="outer">
              <span className="largefont boldfont">28,98,0523</span>
              <span className="smallfont">Last trader qty</span>
              <span>500</span>
              <div className="circuitmain">
                <div className="circuit">
                  <span className="smallfont">Lower circuit</span>
                  <span className="largefont">894.75</span>
                </div>
                <div className="circuit">
                  <span className="smallfont">Uper circuit</span>
                  <span className="largefont">534.75</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ////////// volumn  ////////// */}

      {/* ///////// indicator ////////// */}
      <div className="sectionthird">
        <div className="volumn">
          <span className="commanfontcolor">Price Indicators</span>
          <div className="price-indicator">
            <div className="indicator">
              <div className="open">
                <span className="largefont">960.00</span>
                <span className="smallfont">OPEN</span>
              </div>
              <div className="high">
                <span className="largefont">960.00</span>
                <span className="smallfont">HIGH</span>
              </div>
              <div className="low">
                <span className="largefont">960.95</span>
                <span className="smallfont">LOW</span>
              </div>
              <div className="close">
                <span className="largefont">945.00</span>
                <span className="smallfont">CLOSE</span>
              </div>
            </div>
            <div className="average-trade-price">
              <span className="smallfont">Average Trade Price</span>
              <span className="largefont">950.03</span>
            </div>
          </div>
        </div>
        <div
          className="volumn tradenew"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            gap: '10px',
          }}
        >
          <span style={{ color: 'green' }}>
            Looks like a good time to trade
          </span>
          <span style={{ color: 'blue' }}>options</span>
          <span
            style={{
              backgroundColor: '#C576F6',
              padding: '10px 80px',
              borderRadius: '20px',
              color: 'white',
            }}
          >
            Trade
          </span>
        </div>
      </div>

      {/* //////// Trade ////////// */}
    </div>
  );
};

export default StockDetails;
