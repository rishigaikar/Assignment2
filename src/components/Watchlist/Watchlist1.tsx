import React from "react";
import { stocksData } from "../../Data/Data";
import Header from "../Header/Header";
import StockDetails from "../StockDetailData/StockDetails";
import StockCard from "./StockCard";
import "./watchlist.scss";

const Watchlist: React.FC = () => {
  return (
    <div className="watchlistmain">
      <Header></Header>
      <div className="watchlistright">
        <div className="watchlistcard">
          {stocksData.map((dataObj, index) => (
            <StockCard key={index} data={dataObj} />
          ))}
        </div>
        <StockDetails></StockDetails>
      </div>
    </div>
  );
};

export default Watchlist;
