import "./app.scss";
// import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
// import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Student from "./pages/studentDashboard/Student"
import DashBoardCard from "./component/DashBoardCard/DashBoardCard";
import MyProfile from "./pages/MyProfile/MyProfile";
import RaisAQuery from "./component/RaisAQuery/RaisAQuery";
import DashboardHeader from "./component/DashboardHeader/DashboardHeader";
import {QueryClient , QueryClientProvider} from "@tanstack/react-query"
import DashboardSidebar from "./component/DashboardSidebar/DashboardSidebar";
import DashBoardCards from "./component/DashBoardCards/DashBoardCards";
import Navbar from "./component/Navbar/Navbar";


const queryClient = new QueryClient();

function App() {


  const Layout = () => {
     return (
      <div className="app">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <DashboardSidebar />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
      </div>
     ) 
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
           path: "/",
           element: <Student />
        },
        {
          path: "/myprofile",
          element: <MyProfile />
       },
       {
        path: "/enrolledcourse",
        element: <DashBoardCards />
     }, 

     {
      path: "/allcourse",
      element: <DashBoardCards />
   }, 
 
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
