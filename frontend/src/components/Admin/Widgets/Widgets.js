import React from 'react';
import './widgets.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Widgets = ({ type,Total,diff }) => {
    let data;
  
    switch (type) {
      case "user":
        data = {
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
        break;
      case "doctors":
        data = {
          title: "DOCTORS",
          isMoney: false,
          link: "See all Doctors",
          icon: (
            <LocalHospitalIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        };
        break;
      case "appointments":
        data = {
          title: "APPOINTMENTS",
          isMoney: false,
          link: "See all appointments",
          icon: (
            <BookOnlineIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
        break;
      case "earnings":
        data = {
          title: "EARNINGS",
          isMoney: true,
          link: "See details",
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
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
            {data.isMoney && "₹"} {Total}
          </span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          {data.icon}
        </div>
      </div>
    );
  };

export default Widgets;
