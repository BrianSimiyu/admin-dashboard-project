import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import "./widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">1524</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <RiArrowUpSLine />
          20%
        </div>
        <FiUsers className="icon" />
      </div>
    </div>
  );
};

export default Widget;
