import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { AiTwotoneShop } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Dirä Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <MdOutlineDashboard />
            <span>Dashboard</span>
          </li>
          <li>
            <FiUsers />
            <span>Users</span>
          </li>
          <li>
            <AiTwotoneShop />
            <span>Products</span>
          </li>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <FaTruckMoving />
            <span>Delivery</span>
          </li>

          <li>
            <IoMdNotificationsOutline />
            <span>Notifcations</span>
          </li>

          <li>
            <CgProfile />
            <span>Profile</span>
          </li>
          <li>
            <RiLogoutBoxRLine />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color</div>
    </div>
  );
};

export default Sidebar;
