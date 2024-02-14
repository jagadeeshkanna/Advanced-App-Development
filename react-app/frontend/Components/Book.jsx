


import React, { useState } from 'react';
import './Book.css'
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import Navbar from './Components/Navbar';
// import './Bookevent.css';

const Bookevent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [qu, setQu] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [eventName, setEventName] = useState('');
  const [budget, setBudget] = useState('');
  const [eventType, setEventType] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyAddressChange = (event) => {
    setCompanyAddress(event.target.value);
  };

  const handleQuChange = (event) => {
    setQu(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Add your logic for form submission here
      console.log("Form submitted successfully!");
    } else {
      console.log("Form validation failed. Please fill in all required fields.");
    }
  };

  // const validateForm = () => {
  //   return (
  //     firstName.trim() !== '' &&
  //   lastName.trim() !== '' &&
  //   email.trim() !== '' &&
  //   companyName.trim() !== '' &&
  //   companyAddress.trim() !== '' &&
  //   mobileNumber.trim() !== '' &&
  //   eventName.trim() !== '' &&
  //   budget.trim() !== '' &&
  //   eventType.trim() !== ''
  //   );
  // };

  return (
    <>
            <h1>Book The Event</h1>
      <div className='b-e-b-1'>
        <center>
          <div className="book-1">

            <TextField
              label="FirstName"
              sx={{ width: '300px' }}
              required
              value={firstName}
              onChange={handleFirstNameChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField
              label="LastName"
              sx={{ width: '300px' }}
              required
              value={lastName}
              onChange={handleLastNameChange}
            />

            <br></br><br></br>

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
              value={companyName}
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
              value={companyAddress}
              onChange={handleCompanyAddressChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField
              label="MobileNumber"
              sx={{ width: '300px' }}
              required
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br></br><br></br>

            <TextField
              label="Which event Your are contact(Give the name)"
              sx={{ width: '300px' }}
              value={eventName}
              onChange={handleEventNameChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <FormControl sx={{ minWidth: '300px' }}>
              <InputLabel id="budget-label">Budget</InputLabel>
              <Select
                labelId="budget-label"
                id="demo-simple-select"
                value={budget}
                label="Budget"
                onChange={handleBudgetChange}
              >
                <MenuItem value="" disabled>
                  Budget
                </MenuItem>
                <MenuItem value={10}>30K-60K</MenuItem>
                <MenuItem value={20}>60K-100K</MenuItem>
                <MenuItem value={30}>Above 100K</MenuItem>
              </Select>
            </FormControl>

            <br></br>
            <br></br>

            <FormControl sx={{ minWidth: '300px' }}>
              <InputLabel id="event-type-label">Type of Event</InputLabel>
              <Select
                labelId="event-type-label"
                id="demo-simple-select"
                value={eventType}
                label="Type of Event"
                onChange={handleEventTypeChange}
                sx={{
                  width:"650px"
                }}
              >
                <MenuItem value="" disabled>
                  Type of Event
                </MenuItem>
                <MenuItem value={10}>Technical Event</MenuItem>
                <MenuItem value={20}>Entertainment Event</MenuItem>
                <MenuItem value={30}>Celebration Event</MenuItem>
              </Select>
            </FormControl>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br></br><br></br>

            <TextField
              label="Is contains any game in this Event(YES?NO)"
              sx={{
                width:"650px"
              }}
            />

            <br></br><br></br>

            <TextField
              label="Is any Food arrange in this Event(YES?NO)"
              sx={{
                width:"650px"
              }}
            />

            <br></br><br></br>

            <TextField
              id="outlined-textarea"
              label="Any Queries"
              multiline
              required
              sx={{
                width:"650px",
              
              }}
              value={qu}
              onChange={handleQuChange}
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
    </>
  );
};

export default Bookevent;






