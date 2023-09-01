import "./Student.scss";
import DashboardHeader from "../../component/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../component/DashboardSidebar/DashboardSidebar";
import DashBoardCards from "../../component/DashBoardCards/DashBoardCards";

const Student = () => {
  return (
    <div className="studentDashboard">
      <div className="mainSection">
        {/* <DashboardSidebar /> */}
        <DashBoardCards />
      </div>
    </div>
  );
};

export default Student;
