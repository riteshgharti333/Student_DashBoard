import { Link } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   validation state for input field
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully");
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="Login">
      <div className="login-box">
        <h2 className="heading">Login</h2>
        <form onSubmit={HandleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            className="email"
            id="email"
            onChange={handleEmailChange}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            placeholder="Type your password"
            className="Password"
            id="Password"
            onChange={handlePasswordChange}
          />
          <Link to="/forgetpassword" style={{ textDecoration: "none" }}>
            <span>Forget your password click here...</span>
          </Link>

          <button className="login_btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
