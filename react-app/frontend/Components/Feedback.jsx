// import React, { useState } from 'react';
// import './FeedbackForm.css';

// const FeedbackForm = () => {
//   const [email, setEmail] = useState('');
//   const [rating, setRating] = useState('');
//   const [name, setName] = useState('');
//   const [feedback, setFeedback] = useState('');

//   const handleNameChange = (event) => setName(event.target.value);
//   const handleRatingChange = (event) => setRating(event.target.value);
//   const handleEmailChange = (event) => setEmail(event.target.value);
//   const handleFeedbackChange = (event) => setFeedback(event.target.value);
//   const handleSubmit = () => {
//     // if (validateForm(Bookevent)) {
//       const eventData = {
//         name, email,rating, feedback
//       };

//       axios.post('http://localhost:8080/products/map/event/post/feedback', eventData)
//         .then(response => {
//           // window.alert("Form submitted successfully!")
//           console.log('Form submitted successfully!', response.eventData);
//           console.log(eventData);
//         })
//         .catch(error => {
//           console.error('Error submitting form:', error);
//         });
    
//   };

//   return (
//     <>
// <div className="feedback-div">

//     <div className="feedback-container">
//       <h2 className='h2-feed'>Feedback Form</h2>
//       <form className="feedback-form" >
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} required />
//         </div>
//         <div className="form-group">
//           <label>Rating:</label>
//           <input type="number" min="1" max="5" value={rating} onChange={handleRatingChange} required />
//         </div>
//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" value={name} onChange={handleNameChange} required />
//         </div>
//         <div className="form-group">
//           <label>Feedback:</label>
//           <textarea rows="4" value={feedback} onChange={handleFeedbackChange} required />
//         </div>
//         <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit Feedback</button>
//       </form>
//     </div>
// </div>
//     </>
//   );
// };

// export default FeedbackForm;



import React, { useState } from 'react';
import axios from 'axios';  // Import Axios
import {useNavigate} from "react-router-dom"
import './FeedbackForm.css';

const FeedbackForm = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleRatingChange = (event) => setRating(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleFeedbackChange = (event) => setFeedback(event.target.value);
  const handleSubmit = () => {
    const eventData = {
      name, email, rating, feedback
    };

    axios.post('http://localhost:8080/products/map/event/post/feedback', eventData)
      .then(response => {
        navigate("/Home");
        window.alert("Form submitted successfully!");
        console.log('Form submitted successfully!', response.data);
        console.log(eventData);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <>
      <div className="feedback-div">
        <div className="feedback-container">
          <form className="feedback-form">
          <h2 className='h2-feed'>Feedback Form</h2>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="form-group">
              <label>Rating:</label>
              <input type="number" min="1" max="5" value={rating} onChange={handleRatingChange} required />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" value={name} onChange={handleNameChange} required />
            </div>
            <div className="form-group">
              <label>Feedback:</label>
              <textarea rows="4" value={feedback} onChange={handleFeedbackChange} required />
            </div>
            <button type="button" className="submit-btn" onClick={handleSubmit}>Submit Feedback</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
