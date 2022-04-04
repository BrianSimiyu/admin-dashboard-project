import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiArrowUpSLine } from "react-icons/ri";

import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <HiDotsVertical fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featuredChart"></div>
        <p className="title">Total sales made today</p>
        <p className="amount">450 €</p>
        <p className="description">
          Previous transactions processing. Last payments may not be included
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <RiArrowUpSLine fontSize="small" />
              <div className="resultAmount">€ 12.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <RiArrowUpSLine fontSize="small" />
              <div className="resultAmount">€ 12.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <RiArrowUpSLine fontSize="small" />
              <div className="resultAmount">€ 12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
