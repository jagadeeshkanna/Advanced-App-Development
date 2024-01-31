import  { useState } from 'react';
import {Button,TextField,Select,MenuItem,FormControl,InputLabel,} from '@mui/material';
import Navigation from './Navigation'
import './Sample1.css'
const Sample1 = () => {
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

  // const handleQuChange = (event) => {
  //   setQu(event.target.value);
  // };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  // const handleBudgetChange = (event) => {
  //   setBudget(event.target.value);
  // };

  // const handleEventTypeChange = (event) => {
  //   setEventType(event.target.value);
  // };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       // Add your logic for form submission here
//       console.log("Form submitted successfully!");
//     } else {
//       console.log("Form validation failed. Please fill in all required fields.");
//     }
//   };


  return (
    <>
    <div>
      <Navigation></Navigation>
    </div>
   <div className='klp890'>
    <br></br>
       <div className='hpk78'>
            <h1>Update The Event</h1>
            <div className='all-items'>
          <div className='kl89'>
            <TextField
              label='FirstName'
              sx={{ width: '300px' }}
              value={firstName}
              required
              multiline
               onChange={handleFirstNameChange}
            />

<br></br><br></br>

            <TextField
              label="LastName"
              sx={{ width: '300px' }}
              required
              multiline
              value={lastName}
              onChange={handleLastNameChange}
            />

            <br></br><br></br>

            <TextField
              label="Email"
              sx={{ width: '300px' }}
              required
              multiline
              value={email}
              onChange={handleEmailChange}
            />
<br></br><br></br>
            <TextField
              label="Company Name"
              sx={{ width: '300px' }}
              required
              multiline
              value={companyName}
              onChange={handleCompanyNameChange}
              />

<br></br><br></br>

<TextField
              label="Date"
              sx={{ width: '300px' }}
              required
              multiline
              placeholder='YYYY-MM-DD'
              value={companyName}
              onChange={handleCompanyNameChange}
              />


              </div>
              <div className='lk98'>

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
  <br></br><br></br>

            <TextField
              label="MobileNumber"
              sx={{ width: '300px' }}
              required
              multiline
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />

            <br></br><br></br>

            <TextField
              label="Enter the name of the Event"
              sx={{ width: '300px' }}
              value={eventName}
              multiline
              onChange={handleEventNameChange}
            />

<br></br><br></br>



            <TextField
              label="Enter Your Budject"
              sx={{
                width:"300px"
              }}
              multiline
              />

<br></br><br></br>

<TextField
              label="Enter Time"
              sx={{
                width:"300px"
              }}
              placeholder='HH:MM'
              multiline
              />



              </div>
              </div>
              <br></br>
              <br></br>
              <div className='jack12'>
                <h4>Submit</h4>
              {/* <Button
              size="small"
              color="success"
              variant="contained"
            //   onClick={handleSubmit}
            >
              Submit
            </Button>  */}
            </div>
              </div>
            {/* <FormControl sx={{ minWidth: '300px' }}>
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
            </FormControl> */}

            <br></br>
            <br></br>


            {/* <TextField
              label="Type of Event"
              sx={{
                width:"650px"
              }}
            /> */}
{/* 
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
            </FormControl>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

            <br></br><br></br>

            {/* <TextField
              label="Is contains any game in this Event(YES?NO)"
              sx={{
                width:"650px"
              }}
            /> */}

             
</div>
    </>
  );
};
export default Sample1;