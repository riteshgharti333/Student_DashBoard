import "./app.scss";
// import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
// import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Student from "./pages/studentDashboard/Student"
import DashBoardCard from "./component/DashBoardCard/DashBoardCard";
import MyProfile from "./pages/MyProfile/MyProfile";
import RaisAQuery from "./component/RaisAQuery/RaisAQuery";
import DashboardHeader from "./component/DashboardHeader/DashboardHeader";

// import Demo from "./demo";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <DashboardHeader />
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
