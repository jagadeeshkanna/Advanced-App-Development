
// import React from 'react';
import { Link } from 'react-router-dom';
import './First.css';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';


const SlideNavbar = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your login logic here
  //   console.log("Login logic goes here");
  // };

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[name,setName]=useState('');
  // const[roles,setRoles]=useState('');
  const handleSubmit1 = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/products/authenticate", {
        "email": email,
        "password": password
      });

      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"));
      navigate("/Home");
      window.alert("Login Successful.");
    } catch (error) {
      window.alert("Invalid Username or Password !!!");
      console.log(error);
    }
  }


  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/products/new", {
        "name":name,
        "email": email,
        "password": password,
        "roles":"User"
      });

      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"));
      navigate("/Home");
      window.alert("signup Successful.");
    } catch (error) {
      window.alert("Invalid Username or Password !!!");
      console.log(error);
    }
  }

  return (
    <div className='body-login-1'>
      <div className='box-1'></div>

      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true"/>

        <div className="signup">
          <form onSubmit={handleSubmit2}>
            <label htmlFor="chk" aria-hidden="true" className='f-l'>
              Sign up
            </label>
            <input type="text" name="txt" placeholder="User name" required value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" name="pswd" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} required />
            <input type="text" name="User" placeholder="USER" defaultValue={"USER"} disabled required value={"User"}/>
            {/* <Link to="/Home"> */}
              <button className='but-1'>Sign up</button>
            {/* </Link> */}
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleSubmit1}>
            <label htmlFor="chk" aria-hidden="true" className='f-l'>
              Login
            </label>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" name="pswd" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}  required />
            {/* <Link to='/Home'> */}
              <button className='but-2' type="submit">
                Login
              </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SlideNavbar;

