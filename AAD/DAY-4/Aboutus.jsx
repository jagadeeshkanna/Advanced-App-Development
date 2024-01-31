import './About.css'
 import Navigation from './Navigation'
 import {Link} from 'react-router-dom'  
// import  { useState } from 'react';
const Aboutus = () => {
  
  // State variables to store form data
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [feedback, setFeedback] = useState('');
  
  // // Function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Perform any necessary actions with the form data
  //   console.log('Submitted Data:', { username, email, feedback });

  //   // You can send the form data to a server, perform validation, etc.
  //   // For simplicity, we are just logging the data to the console in this example.
  // };



  return (
    <>
    <div>
      <Navigation></Navigation>
    </div>
    <div className='po25'>
    <div className='jk1'>
    <div className="im6">
    </div>
    <div className='co1'>
    <div className='co71'>
         <h1>About Us</h1>
         <h3>One key advantage that sets us apart lies in our track record of success.</h3>
          <h3>Our portfolio is adorned with compelling client testimonials, </h3>
          <h3>each narrating a story of transformation and enhanced productivity through our bespoke management solutions.</h3>
            <h3>This tangible proof of our impact serves as a testament to the efficacy of our approach.</h3>
    </div>
    </div>
    </div>
    <div>
    {/* <div className='cq1'> 
    <center>
      <h1>Contact Us</h1>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Username:<br></br>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <br></br>
        <label>
          Email:<br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <br></br>
        <label>
          Feedback:<br></br>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </label>
        <br />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      </center>
    </div> */}
    </div>
    </div>
    </>
  )
}

export default Aboutus