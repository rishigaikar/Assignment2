import React from "react";
import "./watchlist.scss";

interface StockCardProps {
  data: {
    name: string;
    percent: string;
    price: number;
    type: string;
  };
}
const StockCard: React.FC<StockCardProps> = ({ data }) => {
  return (
    <div className="stockcard" style={{ paddingTop: "20px" }}>
      <div className="innercardSection">
        <div className="leftSection">
          <span>{data.name}</span>
        </div>
        <div className="rightSection">
          <div className="prices-percent">
            <span
              className="percent"
              style={{
                backgroundColor:
                  data.type === "positive" ? "#98D7C2" : "#cc5801",
              }}
            >
              {data.percent}
            </span>
            <span
              className="price"
              style={{
                color: data.type === "positive" ? "#98D7C2" : "#cc5801",
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
