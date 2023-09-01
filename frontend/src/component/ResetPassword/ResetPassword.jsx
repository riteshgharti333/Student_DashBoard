import { useState } from "react";
import "./ResetPassword.scss";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // validation state for input field
  const [emailError, setEmailError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully");
      console.log("Email:", email);
      console.log("Confirm Password:", newPassword);
      console.log("Confirm Password:", confirmPassword);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <>
      {props.setOpen && (
        <div className="ResetPassword">
          <div className="ResetPassword_container">
            <div className="crossIcon">
              <img
                onClick={() => props.setOpen(false)}
                src="https://cdn-icons-png.flaticon.com/512/57/57165.png"
                alt=""
              />
            </div>
            <h1 className="heading">Reset Password</h1>
            <form onSubmit={HandleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your Email..."
                id="email"
                onChange={handleEmailChange}
              />

              <label htmlFor="password">Enter New Password</label>
              <input
                type="password"
                placeholder="New Password..."
                id="password"
                onChange={handleNewPasswordChange}
              />

              <label htmlFor="Confirm_password">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm New Password..."
                id="Confirm_password"
                onChange={handleConfirmPasswordChange}
              />

              <button type="submit" className="reset_btn">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
