import DashboardHeader from "../../component/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../component/DashboardSidebar/DashboardSidebar";
import "./MyProfile.scss";
import { Link } from "react-router-dom";
const MyProfile = () => {
  return (
    <>
      <div className="myProfile">
        <div className="profileBox">
          <form>
            <div className="input_feild">
              <label htmlFor="name">Name :</label>
              <input type="text" placeholder="Ritesh" id="name" />
            </div>

            <div className="input_feild">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                placeholder="ritesh@gmail.com"
                className="email"
                id="email"
              />
            </div>

            <div className="input_feild">
              <label htmlFor="mobile">Mobile :</label>
              <input type="text" placeholder="123456789" id="mobile" />
            </div>

            <div className="input_feild">
              <label htmlFor="password">Current Password :</label>
              <input type="Password" id="password" />
            </div>

            <div className="input_feild">
              <label htmlFor="Password">New Password :</label>
              <input type="Password" id="Password" />
            </div>

            <button className="update_btn">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
