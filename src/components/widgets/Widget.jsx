import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <FiUsers className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <FiShoppingCart className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MdOutlineAttachMoney className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <MdOutlineAccountBalanceWallet className="icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "€"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <RiArrowUpSLine />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
