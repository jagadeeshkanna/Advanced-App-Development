import React, { useState } from 'react';
import {Button,TextField,Select,MenuItem,FormControl,InputLabel,} from '@mui/material';
import './Cancle.css';
import axios from 'axios';

const Bookevent = () => {

  const [email, setEmail] = useState('');
const [companyname, setCompanyName] = useState('');
  const [companyaddress, setCompanyAddress] = useState('');
  const [anyQueries, setAnyQueries] = useState('');
const [mobilenumber, setMobileNumber] = useState('');
const [date, setDate] = useState('');
  const [time, setTime] = useState('');
 

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleCompanyNameChange = (event) => setCompanyName(event.target.value);
  const handleCompanyAddressChange = (event) => setCompanyAddress(event.target.value);
  const handleQuChange = (event) => setAnyQueries(event.target.value);
  const handleMobileNumberChange = (event) => setMobileNumber(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);

  // const handleSubmit = () => {
  //   if (validateForm()) {
  //     // Add your logic for form submission here
  //     console.log("Form submitted successfully!");
  //   } else {
  //     console.log("Form validation failed. Please fill in all required fields.");
  //   }
  // };
  const handleSubmit = () => {
    const eventData = {
      email,
      companyname,
      companyaddress,
      anyQueries,
      mobilenumber,
      date,
      time,
    };
  
    axios.delete(`http://localhost:8080/products/map/event/del/booking/${email}`, { data: eventData })
      .then(response => {
        console.log('Form is updated successfully!', response.data);
        console.log(eventData);
      })
      .catch(error => {
        console.error('Error canceling event:', error);
      });
  };
  


  return (
    <>
    <div className='po90'>
      <div className='b-e-b-1'>
        <center>
          <div className="cancle-1">
            <h1 className='h1-cancel-event'>Cancle The Event</h1>
            <TextField
              label="Email"
              sx={{ width: '300px' }}
              required
              value={email}
              onChange={handleEmailChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField
              label="Company Name"
              sx={{ width: '300px' }}
              required
              value={companyname}
              onChange={handleCompanyNameChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br></br>
            <br></br>

            <TextField
              id="outlined-textarea"
              label="CompanyAddress"
              multiline
              required
              sx={{
                width: '300px',
              }}
              value={companyaddress}
              onChange={handleCompanyAddressChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField
              label="MobileNumber"
              sx={{ width: '300px' }}
              required
              value={mobilenumber}
              onChange={handleMobileNumberChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br></br><br></br>
            <br></br>
            <div className='input-div-event'>
            Event date
            <input type='date' className='input-book-1' value={date} onChange={handleDateChange}></input></div> &nbsp;&nbsp;&nbsp;&nbsp;
            <div className='input-div-1-event'>
            Event Time
            <input type='time' className='input-book-2' value={time} onChange={handleTimeChange}></input></div>
            <br></br>
            

            <br></br><br></br>


            <TextField
              id="outlined-textarea"
              label="Any Reasons"
              multiline
              required
              sx={{
                width:"650px",
              
              }}
              value={anyQueries} onChange={handleQuChange}
            />

            <br></br><br></br>

            <Button
              size="small"
              color="success"
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </center>
      </div>
      </div>
    </>
  );
};

export default Bookevent;
