import React from "react";
import "./navbar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage />
            English
          </div>
          <div className="item">
            <MdDarkMode />
          </div>
          <div className="item">
            <IoMdNotificationsOutline />
          </div>
          <div className="item">
            <FiMessageSquare />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
