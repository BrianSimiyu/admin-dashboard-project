import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { AiTwotoneShop } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineCreditCard } from "react-icons/ai";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dirä Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <MdOutlineDashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <FiUsers className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <AiTwotoneShop className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <AiOutlineCreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <FaTruckMoving className="icon" />
            <span>Delivery</span>
          </li>

          <li>
            <IoMdNotificationsOutline className="icon" />
            <span>Notifcations</span>
          </li>

          <li>
            <CgProfile className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <RiLogoutBoxRLine className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
