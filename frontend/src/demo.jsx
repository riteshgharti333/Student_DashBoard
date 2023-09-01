import './demo.scss';
// import { useState } from 'react';


function SignUp() {
//     const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

// //   validation state for input field
//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [mobileError, setMobileError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

  //   const HandleSubmit = (event) => {
  //     event.preventDefault();
  //     if (validateForm()) {
  //       console.log('Form submitted successfully');
  //     console.log('Name:', name);
  //     console.log('Email:', email);
  //     console.log('Mobile:', mobile);
  //     console.log('Password:', password);
  //     console.log('Confirm Password:', confirmPassword);
  //   };
 
  

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleMobileChange = (event) => {
  //   setMobile(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmPasswordChange = (event) => {
  //   setConfirmPassword(event.target.value);
  // };
    // }


    return (
        <div className="Login">
        <div className="login-box">
          <h2 className="heading">Sign Up</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              placeholder='Please enter your name'
              className="name"
              id="name"
              // onChange={handleNameChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Please enter your email'
              className="email"
              id="email"
              // onChange={handleEmailChange}
            />
            <label htmlFor="mobile">Mobile</label>
            <input
              type="mobile"
              placeholder='Please enter your mobile no.'
              className="mobile"
              id="mobile"
              // onChange={handleMobileChange}
            />
            <label htmlFor="Password">Password</label>
            <input
              type="Password"
              placeholder='Type your password'
              className="Password"
              id="Password"
              // onChange={handlePasswordChange}
            />
  
            <label htmlFor="Confirm">Confirm Password</label>
            <input
              type="password"
              placeholder='Confirm your password'
              className="Confirm"
              id="Confirm"
              // onChange={handleConfirmPasswordChange}
            />
            <input type="submit" className="submit" />
          </form>
        </div>
      </div>
    );
}

export default SignUp;