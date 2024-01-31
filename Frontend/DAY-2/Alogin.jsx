// import { useState } from 'react';
// import './Alogin.css';
// import {Link} from 'react-router-dom'
// const Alogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Handle login logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <>
//     <div className='jack15'>
//     </div>
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Link to="/Anavigation"><button type="submit">Login</button></Link>
//       </form>
//     </div>
//     </>
//   );
// };

// export default Alogin;















// import  { useState } from 'react';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import './Alogin.css';

// const Alogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault(); 
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <>
//       <div className='jack15'>
//         {/* Content for 'jack15' div */}
//       </div>
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//         {/* Linking to another page typically doesn't happen inside a form */}
//         {/* So, moved the Link component outside the form */}
//         <Link to="/Anavigation">Create an account</Link>
//       </div>
//     </>
//   );
// };

// export default Alogin;





















// SignupForm.jsx
import './Alogin.css'
 import {Link} from 'react-router-dom'
import{ useState } from 'react';
const File = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here, e.g., make an API request to register the user
    console.log('Form submitted with data:', formData);
  };

  return (
    <>
    <div className='gh1'>
    <div className='po11'>
    <div className='bg90'>
      <h2>Sign in</h2> 
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

        </label>
        <br />
        {/* <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label> */}
        <br/>
        <Link to ="/Anavigation">
          <button type="submit" className='bu1'>Sign Up</button></Link>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default File;



















