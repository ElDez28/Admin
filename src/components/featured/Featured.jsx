import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className="featuredContainer">
      <div className="featured-top">
        <h3>Total revenue</h3>
        <MoreVertIcon></MoreVertIcon>
      </div>
      <div className="featuredBottom">
        <div className="featuredChart">
          <div className="chart">
            <CircularProgressbar
              value={70}
              text={"70%"}
              strokeWidth={5}
            ></CircularProgressbar>
          </div>
          <div className="featuredParagaphs">
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">
              Previous transactions processing. Last payments may not be
              included
            </p>
            <div className="targetContainer">
              <div className="targetItem">
                <span>Target</span>
                <div className="up">
                  <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
                  <p>$12.4k</p>
                </div>
              </div>
              <div className="targetItem">
                <span>Last Week</span>
                <div className="down">
                  <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                  <p>$12.4k</p>
                </div>
              </div>
              <div className="targetItem">
                <span>Last Month</span>
                <div className="down">
                  <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                  <p>$12.4k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
