import "./DashboardHeader.scss";
import Logo from "../../images/logo_final.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  return (
    <div className="dashboardHeader">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="studentProfile">
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt=""
          onClick={() => setOptionsVisible(!optionsVisible)}
        />
        {optionsVisible && (
          <div className="options">
            <Link to="/myprofile" style={{ textDecoration: "none" }}>
              <span>My Profile</span>
            </Link>
            <hr />
            <Link style={{ textDecoration: "none" }}>
              <span>LogOut</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
