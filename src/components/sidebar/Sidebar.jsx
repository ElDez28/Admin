import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { darkActions } from "../../store/store";
import { useDispatch } from "react-redux";
function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">admin</div>
      </div>
      <div className="center">
        <ul className="sidebarList">
          <p className="sidebarTitle">MAIN</p>
          <li className="sidebarItem">
            <Link to="/" className="link">
              <DashboardIcon></DashboardIcon>
              <span> Dashboard</span>
            </Link>
          </li>
          <p className="sidebarTitle">LISTS</p>
          <li className="sidebarItem">
            <Link to="/users" className="link">
              <PersonOutlineIcon></PersonOutlineIcon>
              <span> Users</span>
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to="/products" className="link">
              <StoreIcon></StoreIcon>
              <span> Products</span>
            </Link>
          </li>
          <li className="sidebarItem">
            <CreditCardIcon></CreditCardIcon>
            <span>Orders</span>
          </li>
          <li className="sidebarItem">
            <LocalShippingIcon></LocalShippingIcon>
            <span> Delivery</span>
          </li>
          <p className="sidebarTitle">USEFUL</p>
          <li className="sidebarItem">
            <InsertChartIcon></InsertChartIcon>
            <span> Stats</span>
          </li>
          <li className="sidebarItem">
            <NotificationsNoneIcon></NotificationsNoneIcon>
            <span> Notifications</span>
          </li>
          <p className="sidebarTitle">SERVICE</p>
          <li className="sidebarItem">
            <SettingsSystemDaydreamOutlinedIcon></SettingsSystemDaydreamOutlinedIcon>
            <span> System Health</span>
          </li>
          <li className="sidebarItem">
            <PsychologyOutlinedIcon></PsychologyOutlinedIcon>
            <span>Logs</span>
          </li>
          <li className="sidebarItem">
            <SettingsApplicationsIcon></SettingsApplicationsIcon>
            <span>Settings</span>
          </li>
          <p className="sidebarTitle">USER</p>
          <li className="sidebarItem">
            <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
            <span>Profile</span>
          </li>
          <li className="sidebarItem">
            <ExitToAppIcon></ExitToAppIcon>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          onClick={() => dispatch(darkActions.setWhite())}
          className="whiteMode"
        ></div>
        <div
          onClick={() => dispatch(darkActions.setDark())}
          className="blackMode"
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
