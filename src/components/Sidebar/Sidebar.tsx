import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="sidebar">
        <div className="watchlist">
          <ul>
            <li>
              <Link to="/watchlist1">Watchlist 1</Link>
            </li>
            <li>
              <Link to="/watchlist2">Watchlist 2</Link>
            </li>
            <li>
              <Link to="/watchlist3">Watchlist 3</Link>
            </li>
            <li>
              <Link to="/watchlist3">Watchlist 4</Link>
            </li>
            <li>
              <Link to="/watchlist3">Watchlist 5</Link>
            </li>
          </ul>
        </div>
        {/* Other sidebar content goes here */}
      </div>
    </>
  );
};

export default Sidebar;
