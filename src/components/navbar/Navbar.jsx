import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useDispatch } from "react-redux";
import { darkActions } from "../../store/store";
import "./navbar.css";
function Navbar(props) {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="searchBar">
          <input className="navInput" type="text" placeholder="Search..." />
          <SearchIcon className="navIcon"></SearchIcon>
        </div>
        <div className="navItems">
          <div className="navItem">
            <LanguageIcon className="navIcon"></LanguageIcon>
            <span>English</span>
          </div>
          <div
            onClick={() => {
              dispatch(darkActions.toggleMode());
            }}
            className="navItem"
          >
            <DarkModeIcon className="navIcon"></DarkModeIcon>
          </div>
          <div className="navItem">
            <NotificationsIcon className="navIcon"></NotificationsIcon>
            <div className="counter">1</div>
          </div>
          <div className="navItem">
            <ChatBubbleOutlineIcon className="navIcon"></ChatBubbleOutlineIcon>
            <div className="counter">1</div>
          </div>
          <div className="navItem">
            <MenuIcon className="navIcon"></MenuIcon>
          </div>
          <div className="navItem">
            <img
              alt=""
              src="https://images.pexels.com/photos/2224699/pexels-photo-2224699.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="navImage"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
