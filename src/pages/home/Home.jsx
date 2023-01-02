import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

import ProductTable from "../../components/table/Table";

const Home = (props) => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <div className={`home `}>
      <Sidebar></Sidebar>

      <div className={`homeContainer`}>
        <Navbar></Navbar>
        <div className="widgetContainer">
          <Widget
            title="USERS"
            counter="2345"
            link="See all users"
            percentage="20"
            icon={
              <AccountCircleIcon className="widgetIcon one"></AccountCircleIcon>
            }
          ></Widget>
          <Widget
            title="ORDERS"
            counter="4567"
            link="See all orders"
            percentage="30"
            icon={
              <ShoppingCartIcon className="widgetIcon two"></ShoppingCartIcon>
            }
          ></Widget>

          <Widget
            title="EARNINGS"
            counter="$ 456"
            link="View net earnings"
            percentage="15"
            icon={
              <CurrencyExchangeIcon className="widgetIcon three"></CurrencyExchangeIcon>
            }
          ></Widget>
          <Widget
            title="BALANCE"
            counter="$ 56778"
            link="See details"
            percentage="45"
            icon={
              <AccountBalanceWalletIcon className="widgetIcon four"></AccountBalanceWalletIcon>
            }
          ></Widget>
        </div>
        <div className="chartsContainer">
          <Featured></Featured>
          <Chart aspect={2 / 1} title="Last 6 Months (Revenue)"></Chart>
        </div>
        <ProductTable
          rows={rows}
          productTable={true}
          padding={true}
        ></ProductTable>
      </div>
    </div>
  );
};

export default Home;
