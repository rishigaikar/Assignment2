import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Watchlist from "./components/Watchlist/Watchlist1";
import "./components/firstSidebar.scss";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faGlasses,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="firstSidebar" style={{ margin: "20px 0px" }}>
            <div className="firstwatchlist">
              <ul>
                <li>
                  <Link to="/watchlist1">
                    <FontAwesomeIcon icon={faHouse} style={{ color: "grey" }} />
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlasses} style={{ color: "blue" }} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faBook} style={{ color: "grey" }} />
                </li>
                <li style={{ marginTop: "40px" }}>
                  <FontAwesomeIcon icon={faUser} style={{ color: "grey" }} />
                </li>
              </ul>
            </div>
            {/* Other sidebar content goes here */}
          </div>
        </div>
        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/watchlist1" element={<Watchlist />} />
            <Route path="/watchlist2" element={<Watchlist />} />
            <Route path="/watchlist3" element={<Watchlist />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
