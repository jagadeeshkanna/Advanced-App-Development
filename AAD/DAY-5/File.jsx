// SignupForm.jsx
import './File.css'
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
      <h2>Signup</h2> 
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
        <label>
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
        </label>
        <br/>
        <Link to ="/Login">
          <button type="submit" className='bu1'>Sign Up</button></Link>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default File;
