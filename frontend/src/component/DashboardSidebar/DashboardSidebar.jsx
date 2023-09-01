import { Link } from "react-router-dom";
import "./DashboardSidebar.scss";
import { useState } from "react";
import RaisAQuery from "../RaisAQuery/RaisAQuery"

const DashboardSidebar = () => {

  const [open , setOpen] = useState(false);
  const [showSidebar , setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  return (
    <>
     <div className={`sidebar ${showSidebar ? "show" : "noShowSidebar"}`}>
      <div className="sidebar_content">
        <Link to="/enrollcourse" style={{textDecoration: "none"}}>
          <h3>Enrolled Course</h3>
        </Link>
        <Link to="/allcourse" style={{textDecoration: "none"}}>
          <h3>All Course</h3>
        </Link>
      </div>
      <div className="queryRase">
        <h3 onClick={() => setOpen(true)}> Rais a Query</h3>
      </div>
    </div>
    {open && <RaisAQuery setOpen={setOpen} />}
    <div className={`sidebarBtn ${showSidebar ? "leftSidebarBtn" : "sidebarBtn"  } `} onClick={toggleSidebar}>
       <div className="sidebarIcon"></div>
      </div>
    </>
  );
};

export default DashboardSidebar;
