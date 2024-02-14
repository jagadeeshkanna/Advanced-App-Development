// import React from 'react';
// import './Adminlogin.css'; 
// import { Link } from 'react-router-dom';

// const SlideNavbar = () => {
//   return (
//     <body className='body-login-11'>
     
//    <div className='box-11'>

//    </div>
    
//     <div className="main1">
//       <input type="checkbox" id="chk" aria-hidden="true" />

//       <div className="signup">
//         <form>
//           <label htmlFor="chk" aria-hidden="true" className='f-l1'>
//             Sign up
//           </label>
//           <input type="text" name="txt" placeholder="User name" required/>
//           <input type="email" name="email" placeholder="Email" required/>
//           <input type="password" name="pswd" placeholder="Password" required/>
//           <Link to="/Adminhome"><button className='but-11'>Sign up</button></Link>
//         </form>
//       </div>

//       <div className="login">
//         <form>
//           <label htmlFor="chk" aria-hidden="true" className='f-l1'>
//             Login
//           </label>
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="password" name="pswd" placeholder="Password" required/>
//           <button className='but-21'>Login</button>
//         </form>
//       </div>
//     </div>
//     </body>
//   );
// };

// export default SlideNavbar;







































import { useState } from 'react';
// import './Signup.css';
import './Adminlogin.css'
import { Link} from "react-router-dom";
import axios from 'axios';
//import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import {useNavigate} from "react-router-dom"
const Signup = () => {
  // const [userType, setUserType] = useState('user'); // 'user' is the default user type
  // eslint-disable-next-line no-unused-vars
   // const navigate =useNavigate();
  // const [name, setName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //  const [confirmPassword, setConfirmPassword] = useState('');
  // const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit =async  (event) => {
    event.preventDefault();


  //   if (!email.includes('@')) {
  //     setErrorMessage('Email should contain @ symbol');
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setErrorMessage('Passwords do not match');
  //     return;
  //   }

  //  console.log('Name:', name);
  //   // console.log('Phone Number:', phoneNumber);
  //   console.log('Email:', email);
  //   console.log('Password:', password);






  try {
    const response =await axios.post("http://localhost:8080/products/new", {
     "name": name,  
     "email": email,
    "password": password,
    // "confirmpassword":confirmPassword,
    // "roles":"USER"

    });

    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    console.log(localStorage.getItem("token"));
    // navigate("/Home");
    window.alert("Login Successful.");  
    // history.push("/Login")
  } catch (error) {
    window.alert("Invalid Username or Password !!!");
    console.log(error);
  }







    setErrorMessage('');
  };

  return (
    <div className="sbody">
      <div className="registration-container">
        <div className="img-container">
          <img src={"https://img.freepik.com/premium-vector/event-management-wedding-planner-manager-planning-event-conference-party_501813-2157.jpg"} alt="Background" />
        </div>
        <div className="registration-form-container">
          <center>
            <h2>Login</h2>
          </center>
          {/* Radio Buttons for User Type */}
          <form className="sform" onSubmit={handleSubmit}>
            {/* <div className="sinput-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              required/>
            </div> */}

            {/* <div className="sinput-group">
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="form-input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div> */}

            <div className="sinput-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div className="sinput-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </div>

            {/* <div className="sinput-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div> */}



{/* 
            <div className="sinput-group">
              <input
                type="text"
                // name="confirmPassword"
                // placeholder="USER"
                className="form-input"
                value={"USER"}
                // onChange={(e) => setConfirmPassword(e.target.value)}
                disabled
                required/>
            </div> */}




            <div className="sinput-group">
              <center>
              <Link to="/Adminhome"> 
               <button type="submit" className="form-button" onSubmit={handleSubmit}>
                  Login
                </button></Link>
                {/* </Link> */}
              </center>
            </div>
            <div className='h2'>
           <center></center>
           <center><p>Login to enter the Admin  page</p>
           </center></div>
            <center>
             {/* <Link to="/Adminhome"> <a href="#" className="bala">
                Already have an account? Log in
              </a></Link> */}
            </center>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

