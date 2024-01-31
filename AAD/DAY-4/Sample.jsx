import React, { useState } from 'react';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import Navigation from './Navigation';
import './Sample.css';

const Bookevent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
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

  // const handleSubmit = () => {
  //   if (validateForm()) {
  //     // Add your logic for form submission here
  //     console.log("Form submitted successfully!");
  //   } else {
  //     console.log("Form validation failed. Please fill in all required fields.");
  //   }
  // };

  return (
    <>
      <div>
        <Navigation />
      </div>

      <div className='op89'>
        <br />
        <br />
        <div className='hpk78'>
        <h1>Book The Event</h1>
          <div className='all-items'>
            <div className='kl89'>
              <TextField
                label='FirstName'
                sx={{ width: '300px' }}
                value={firstName}
                multiline
                required
                onChange={handleFirstNameChange}
              />
              <br />
              <br />
              <TextField
                label="LastName"
                sx={{ width: '300px' }}
                multiline
                required
                value={lastName}
                onChange={handleLastNameChange}
              />
              <br />
              <br />
              <TextField
                label="Email"
                sx={{ width: '300px' }}
                required
                multiline
                value={email}
                onChange={handleEmailChange}
              />
              <br />
              <br />
              <TextField
                label="Company Name"
                sx={{ width: '300px' }}
                required
                value={companyName}
                multiline
                onChange={handleCompanyNameChange}
              />

<br/>  <br />
              <TextField
                label="Enter Date"
                sx={{ width: '300px' }}
                required
                value={companyName}
                placeholder='YYYY/MM/DD'
                multiline
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className='lk98'>
              <TextField
                id="outlined-textarea"
                label="CompanyAddress"
                multiline
                required

                sx={{ width: '300px' }}
                value={companyAddress}
                onChange={handleCompanyAddressChange}
              />
              <br />
              <br />
              <TextField
                label="MobileNumber"
                sx={{ width: '300px' }}
                required
                multiline
                value={mobileNumber}
                onChange={handleMobileNumberChange}
              />
              <br />
              <br />
              <TextField
                label="Enter the name of the Event"
                sx={{ width: '300px' }}
                value={eventName}
                multiline
                onChange={handleEventNameChange}
              />
              <br />
              <br />
              <FormControl sx={{ width: '300px' }}>
                <InputLabel id="budget-label">Budget</InputLabel>
                <Select
                  labelId="budget-label"
                  value={budget}
                  multiline
                  onChange={handleBudgetChange}
                >
                  <MenuItem value="" disabled>
                    Budget
                  </MenuItem>
                  <MenuItem value={1}>30K-60K</MenuItem>
                  <MenuItem value={2}>60K-100K</MenuItem>
                  <MenuItem value={3}>Above 100K</MenuItem>
                </Select>
              </FormControl>
<br></br><br></br>
              <TextField
                label="Enter Time"
                sx={{ width: '300px' }}
                value={eventName}
                multiline
                placeholder='HH:MM'
                onChange={handleEventNameChange}
              /> 
            </div>
          </div>
          <br />
          <br />
          <div className='jack11'>
            submit
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookevent;
