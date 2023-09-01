import { useState } from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom"
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "../../images/logo_final.svg";
import RaisAQuery from "../RaisAQuery/RaisAQuery";



function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [open , setOpen] = useState(false);

  

  return (
    <nav className="app__navbar">
      <Link to="/" className="app__navbar-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="app__navbar-btn__section">
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

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li>
                <Link onClick={() => setToggle(false)} to="/allcourse">
                  All Courses
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(false)} to="/enrolledcourse">
                  Enrolled Courses
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(false)} to="/myprofile">
                  My Profile
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(false)} to="/about">
                  LogOut
                </Link>
              </li>
              <li>
                <Link onClick={() =>{ setToggle(false);
      setOpen(true) }}>
                  Rais a query
                </Link>
              </li>
            </ul>
            {open && <RaisAQuery setOpen={setOpen} />}
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
