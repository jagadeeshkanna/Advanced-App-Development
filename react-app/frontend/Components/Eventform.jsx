import React, { useState } from 'react';
import './EventForm.css'; // Make sure the file name matches the import statement
import Logo from '../assets/Logo.png'
import axios from 'axios';
import Navbar from './Navbar'
function AdEventBox() {
  const [isActive, setIsActive] = useState(false);
  const [eventName, setEventName] = useState('');
  const [imgUrl, setImageUrl] = useState('');
  const [eventDesc, setDescription] = useState('');
  const handleButtonClick = () => {
    setIsActive((prev) => !prev);
  };
  const handleEventNameChange = (event) => setEventName(event.target.value);
  const handleImageUrlChange = (event) => setImageUrl(event.target.value);
  const handleDescriptionChange= (event) => setDescription(event.target.value);
  const handleSubmit = () => {
    // if (validateForm(Bookevent)) {
      const eventData = {
        eventName,imgUrl,eventDesc
      };

      axios.post('http://localhost:8080/products/map/event/post/createevent', eventData)
        .then(response => {
          // window.alert("Form submitted successfully!")
          console.log('Form submitted successfully!', response.eventData);
          console.log(eventData);
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        });
    
  };
 
  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <div className="ad-modal-container">
        <div className="ad-modal-content">
          <img className="ad-img2" src={Logo} alt="Event Logo" />
          <div className="ad-evnt-create-box">
            <div className="">
              <a href="/Createevent">
                <img
                  className="ad-img"
                  src="https://openclipart.org/image/2400px/svg_to_png/183568/close-button.png"
                  alt="Close Button"
                />
              </a>
              <h1 className="ad-h11">Event</h1>
              <br />
              <form className="ad-event-details" onSubmit={handleSubmit}>
                <div className="ad-event-items">
                  <label className="ad-label" >Event Name</label>
                  <input className="ad-input" type="text" placeholder="Enter Event Name" value={eventName} onChange={handleEventNameChange}/>
                  <label className="ad-label">Image URL</label>
                  <input className="ad-input" type="url" placeholder="Enter Image Url" value={imgUrl} onChange={handleImageUrlChange} required />
                </div>
                <div className="ad-event-items">
                  <label className="ad-label">Description</label>
                  <textarea
                    className="ad-textarea"
                    rows="10"
                    cols="50"
                    placeholder="Enter Description"
                    value={eventDesc}
                    onChange={handleDescriptionChange}
                    required
                  />
                
                </div>
                <div className="ad-event-items1">
                  <div className="ad-box1">
                    
                  </div>
                  <div className={`ad-wrapper ${isActive ? 'active' : ''}`}>
                    <button className={`ad-custom-button ${isActive ? 'is_active' : ''}`} onClick={handleButtonClick}>
                      <span>Post Event</span>
                      <div className="ad-success">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756">
                          <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AdEventBox;
