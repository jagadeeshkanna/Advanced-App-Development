// import React, { useState } from 'react';
// import {Button,TextField,Select,MenuItem,FormControl,InputLabel,} from '@mui/material';
// import './Bookevent.css';

// const Bookevent = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [companyAddress, setCompanyAddress] = useState('');
//   const [qu, setQu] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [eventName, setEventName] = useState('');
//   const [budget, setBudget] = useState('');
//   const [eventType, setEventType] = useState('');

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleCompanyNameChange = (event) => {
//     setCompanyName(event.target.value);
//   };

//   const handleCompanyAddressChange = (event) => {
//     setCompanyAddress(event.target.value);
//   };

//   const handleQuChange = (event) => {
//     setQu(event.target.value);
//   };

//   const handleMobileNumberChange = (event) => {
//     setMobileNumber(event.target.value);
//   };

//   const handleEventNameChange = (event) => {
//     setEventName(event.target.value);
//   };

//   const handleBudgetChange = (event) => {
//     setBudget(event.target.value);
//   };

//   const handleEventTypeChange = (event) => {
//     setEventType(event.target.value);
//   };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       // Add your logic for form submission here
//       console.log("Form submitted successfully!");
//     } else {
//       console.log("Form validation failed. Please fill in all required fields.");
//     }
//   };


//   return (
//     <>
//       <div className='b-e-b-1'>
//         <center>
//           <div className="book-1">
//             <h1 className='h1-book-event'>Book The Event</h1>

//             <TextField
//               label='FirstName'
//               sx={{ width: '300px' }}
//               value={firstName}
//               required
//                onChange={handleFirstNameChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <TextField
//               label="LastName"
//               sx={{ width: '300px' }}
//               required
//               value={lastName}
//               onChange={handleLastNameChange}
//             />

//             <br></br><br></br>

//             <TextField
//               label="Email"
//               sx={{ width: '300px' }}
//               required
//               value={email}
//               onChange={handleEmailChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <TextField
//               label="Company Name"
//               sx={{ width: '300px' }}
//               required
//               value={companyName}
//               onChange={handleCompanyNameChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <br></br>
//             <br></br>

//             <TextField
//               id="outlined-textarea"
//               label="CompanyAddress"
//               multiline
//               required
//               sx={{
//                 width: '300px',
//               }}
//               value={companyAddress}
//               onChange={handleCompanyAddressChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <TextField
//               label="MobileNumber"
//               sx={{ width: '300px' }}
//               required
//               value={mobileNumber}
//               onChange={handleMobileNumberChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <br></br><br></br>

//             <TextField
//               label="Which event Your are contact(Give the name)"
//               sx={{ width: '300px' }}
//               value={eventName}
//               onChange={handleEventNameChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <FormControl sx={{ minWidth: '300px' }}>
//               <InputLabel id="budget-label">Budget</InputLabel>
//               <Select
//                 labelId="budget-label"
//                 id="demo-simple-select"
//                 value={budget}
//                 label="Budget"
//                 onChange={handleBudgetChange}
//               >
//                 <MenuItem value="" disabled>
//                   Budget
//                 </MenuItem>
//                 <MenuItem value={10}>30K-60K</MenuItem>
//                 <MenuItem value={20}>60K-100K</MenuItem>
//                 <MenuItem value={30}>Above 100K</MenuItem>
//               </Select>
//             </FormControl>

//             <br></br>
//             <br></br>
//             <br></br>
//             <div className='input-div'>
//             Event date
//             <input type='date' className='input-book-1'></input></div> &nbsp;&nbsp;&nbsp;&nbsp;
//             <div className='input-div-1'>
//             Event Time
//             <input type='time' className='input-book-2'></input></div>
//             <br></br>
//             <FormControl sx={{ minWidth: '300px' }}>
//               <InputLabel id="event-type-label">Type of Event</InputLabel>
//               <Select
//                 labelId="event-type-label"
//                 id="demo-simple-select"
//                 value={eventType}
//                 label="Type of Event"
//                 onChange={handleEventTypeChange}
//                 sx={{
//                   width:"650px"
//                 }}
//               >
//                 <MenuItem value="" disabled>
//                   Type of Event
//                 </MenuItem>
//                 <MenuItem value={10}>Technical Event</MenuItem>
//                 <MenuItem value={20}>Entertainment Event</MenuItem>
//                 <MenuItem value={30}>Celebration Event</MenuItem>
//               </Select>
//             </FormControl>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <br></br><br></br>

//             <TextField
//               label="Is contains any game in this Event(YES?NO)"
//               sx={{
//                 width:"650px"
//               }}
//             />

//             <br></br><br></br>

//             <TextField
//               label="Is any Food arrange in this Event(YES?NO)"
//               sx={{
//                 width:"650px"
//               }}
//             />

//             <br></br><br></br>

//             <TextField
//               id="outlined-textarea"
//               label="Any Queries"
//               multiline
//               required
//               sx={{
//                 width:"650px",
              
//               }}
//               value={qu}
//               onChange={handleQuChange}
//             />

//             <br></br><br></br>

//             <Button
//               size="small"
//               color="success"
//               variant="contained"
//               onClick={handleSubmit}
//             >
//               Submit
//             </Button>
//           </div>
//         </center>
//       </div>
//     </>
//   );
// };

// export default Bookevent;








// import React, { useState } from 'react';
// import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import axios from 'axios';
// import './Bookevent.css';

// const Bookevent = () => {
//   const [firstname, setFirstName] = useState('');
//   const [lastname, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [companyname, setCompanyName] = useState('');
//   const [companyaddress, setCompanyAddress] = useState('');
//   const [anyQueries, setAnyQueries] = useState('');
//   const [mobilenumber, setMobileNumber] = useState('');
//   const [eventname, setEventName] = useState('');
//   const [budget, setBudget] = useState('');
//   const [typeOfEvent, setTypeOfEvent] = useState('');
//   const[food,setFood]=useState('');
//   const[game,setGame]=useState('');
//   const[date,setDate]=useState('');
//   const[time,setTime]=useState('');
//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleCompanyNameChange = (event) => {
//     setCompanyName(event.target.value);
//   };

//   const handleCompanyAddressChange = (event) => {
//     setCompanyAddress(event.target.value);
//   };

//   const handleQuChange = (event) => {
//     setAnyQueries(event.target.value);
//   };

//   const handleMobileNumberChange = (event) => {
//     setMobileNumber(event.target.value);
//   };

//   const handleEventNameChange = (event) => {
//     setEventName(event.target.value);
//   };

//   const handleBudgetChange = (event) => {
//     setBudget(event.target.value);
//   };

//   const handleEventTypeChange = (event) => {
//     setTypeOfEvent(event.target.value);
//   };

//   const handleFoodChange=(event)=>{
//     setFood(event.target.value);
//   }
//   const handleGameChange=(event)=>{
//     setGame(event.target.value);
//   }
//   const handleTimeChange=(event)=>{
//     setTime(event.target.value);
//   }
//   const handleDateChange=(event)=>{
//     setDate(event.target.value);
//   }

//   const handleSubmit = () => {
//     if (validateForm(Bookevent)) {
//       const eventData = {
//         firstname,
//         lastname,
//         email,
//         companyname,
//         companyaddress,
//         anyQueries,
//         mobilenumber,
//         eventname,
//         budget,
//         typeOfEvent,
//         food,
//         date,
//         time,
//         game
//       };

//       axios.post('http://localhost:8080/products/map/event/post/booking', eventData)
//         .then(response => {
//           console.log('Form submitted successfully!', response.data);
//           console.log(eventData);
//           // Handle success, e.g., show a success message to the user
//         })
//         .catch(error => {
//           console.error('Error submitting form:', error);
//           // Handle errors, e.g., show an error message to the user
//         });
//     } else {
//       console.log("Form validation failed. Please fill in all required fields.");
//       // Optionally, show a validation error message to the user
//     }
//   };

//   return (
//     <>
//       <div className='b-e-b-1'>
//         <center>
//           <div className="book-1">
//             <h1 className='h1-book-event'>Book The Event</h1>

//             <TextField
//               label='FirstName'
//               sx={{ width: '300px' }}
//               value={firstname}
//               required
//               onChange={handleFirstNameChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <TextField
//               label="LastName"
//               sx={{ width: '300px' }}
//               required
//               value={lastname}
//               onChange={handleLastNameChange}
//             />

//             <br></br><br></br>

//             <TextField
//               label="Email"
//               sx={{ width: '300px' }}
//               required
//               value={email}
//               onChange={handleEmailChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <TextField
//               label="Company Name"
//               sx={{ width: '300px' }}
//               required
//               value={companyname}
//               onChange={handleCompanyNameChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <br></br>
//             <br></br>

//             <TextField
//               id="outlined-textarea"
//               label="CompanyAddress"
//               multiline
//               required
//               sx={{
//                 width: '300px',
//               }}
//               value={companyaddress}
//               onChange={handleCompanyAddressChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <TextField
//               label="MobileNumber"
//               sx={{ width: '300px' }}
//               required
//               value={mobilenumber}
//               onChange={handleMobileNumberChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <br></br><br></br>

//             <TextField
//               label="Which event Your are contact(Give the name)"
//               sx={{ width: '300px' }}
//               value={eventname}
//               onChange={handleEventNameChange}
//             />

//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <FormControl sx={{ minWidth: '300px' }}>
//               <InputLabel id="budget-label">Budget</InputLabel>
//               <Select
//                 labelId="budget-label"
//                 id="demo-simple-select"
//                 value={budget}
//                 label="Budget"
//                 onChange={handleBudgetChange}
//               >
//                 <MenuItem value="" disabled>
//                   Budget
//                 </MenuItem>
//                 <MenuItem value={10}>30K-60K</MenuItem>
//                 <MenuItem value={20}>60K-100K</MenuItem>
//                 <MenuItem value={30}>Above 100K</MenuItem>
//               </Select>
//             </FormControl>

//             <br></br>
//             <br></br>
//             <br></br>
//             <div className='input-div'>
//               Event date
//               <input type='date' className='input-book-1' value={setDate} onChange={handleDateChange}></input>
//             </div> &nbsp;&nbsp;&nbsp;&nbsp;
//             <div className='input-div-1'>
//               Event Time
//               <input type='time' className='input-book-2' value={setTime} onChange={handleTimeChange}></input>
//             </div>
//             <br></br>
//             <FormControl sx={{ minWidth: '300px' }}>
//               <InputLabel id="event-type-label">Type of Event</InputLabel>
//               <Select
//                 labelId="event-type-label"
//                 id="demo-simple-select"
//                 value={typeOfEvent}
//                 label="Type of Event"
//                 onChange={handleEventTypeChange}
//                 sx={{
//                   width: "650px"
//                 }}
//               >
//                 <MenuItem value="" disabled>
//                   Type of Event
//                 </MenuItem>
//                 <MenuItem value={10}>Technical Event</MenuItem>
//                 <MenuItem value={20}>Entertainment Event</MenuItem>
//                 <MenuItem value={30}>Celebration Event</MenuItem>
//               </Select>
//             </FormControl>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//             <br></br><br></br>

//             <TextField
//               label="Is contains any game in this Event(YES?NO)"
//               value={game}
//               onChange={handleGameChange}
//               sx={{
//                 width: "650px"
//               }}
//             />

//             <br></br><br></br>

//             <TextField
//               label="Is any Food arrange in this Event(YES?NO)"
//               value={food}
//               onChange={handleFoodChange}
//               sx={{
//                 width: "650px"
//               }}
//             />

//             <br></br><br></br>

//             <TextField
//               id="outlined-textarea"
//               label="Any Queries"
//               multiline
//               required
//               sx={{
//                 width: "650px",

//               }}
//               value={anyQueries}
//               onChange={handleQuChange }
//             />

//             <br></br><br></br>

//             <Button
//               size="small"
//               color="success"
//               variant="contained"
//               onClick={handleSubmit}
//             >
//               Submit
//             </Button>
//           </div>
//         </center>
//       </div>
//     </>
//   );
// };

// export default Bookevent;





import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import './Bookevent.css';
import {useNavigate} from "react-router-dom"

const Bookevent = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [companyaddress, setCompanyAddress] = useState('');
  const [anyQueries, setAnyQueries] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [eventname, setEventName] = useState('');
  const [budget, setBudget] = useState('');
  const [typeOfEvent, setTypeOfEvent] = useState('');
  const [food, setFood] = useState('');
  const [game, setGame] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleCompanyNameChange = (event) => setCompanyName(event.target.value);
  const handleCompanyAddressChange = (event) => setCompanyAddress(event.target.value);
  const handleQuChange = (event) => setAnyQueries(event.target.value);
  const handleMobileNumberChange = (event) => setMobileNumber(event.target.value);
  const handleEventNameChange = (event) => setEventName(event.target.value);
  const handleBudgetChange = (event) => setBudget(event.target.value);
  const handleEventTypeChange = (event) => setTypeOfEvent(event.target.value);
  const handleFoodChange = (event) => setFood(event.target.value);
  const handleGameChange = (event) => setGame(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);

  const handleSubmit = () => {
    // if (validateForm(Bookevent)) {
      const eventData = {
        firstname, lastname, email, companyname, companyaddress, anyQueries,
        mobilenumber, eventname, budget, typeOfEvent, food, date, time, game
      };

      axios.post('http://localhost:8080/products/map/event/post/booking', eventData)
        .then(response => {
          // window.alert("Form submitted successfully!")
          // navigate("/Home");
          window.alert("Form submitted successfully!");
          console.log('Form submitted successfully!', response.eventData);
          console.log(eventData);
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        });
    
  };

  return (
    <>
    <div className='up34'>
      <div className='b-e-b-1'>
        <center>
        <h1 className='h1-book-event'>Book The Event</h1>
          <div className="book-1">
           

            <TextField label='FirstName' sx={{ width: '300px' }} value={firstname} required onChange={handleFirstNameChange} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField label="LastName" sx={{ width: '300px' }} required value={lastname} onChange={handleLastNameChange} />
            <br /><br />

            <TextField label="Email" sx={{ width: '300px' }} required value={email} onChange={handleEmailChange} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField label="Company Name" sx={{ width: '300px' }} required value={companyname} onChange={handleCompanyNameChange} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br /><br />

            <TextField id="outlined-textarea" label="CompanyAddress" multiline required sx={{ width: '300px' }} value={companyaddress} onChange={handleCompanyAddressChange} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField label="MobileNumber" sx={{ width: '300px' }} required value={mobilenumber} onChange={handleMobileNumberChange} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br /><br />

            <TextField label="Which event Your are contact(Give the name)" sx={{ width: '300px' }} value={eventname} onChange={handleEventNameChange} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <FormControl sx={{ minWidth: '300px' }}>
              <InputLabel id="budget-label">Budget</InputLabel>
              <Select labelId="budget-label" id="demo-simple-select" value={budget} label="Budget" onChange={handleBudgetChange}>
                <MenuItem value="" disabled>Budget</MenuItem>
                <MenuItem value={"30K-60K"}>30K-60K</MenuItem>
                <MenuItem value={"60K-100K"}>60K-100K</MenuItem>
                <MenuItem value={"Above 100K"}>Above 100K</MenuItem>
              </Select>
            </FormControl>

            <br /><br /><br />
            <div className='input-div'>
              Event date
              <input type='date' className='input-book-1' value={date} onChange={handleDateChange}></input>
            </div> &nbsp;&nbsp;&nbsp;&nbsp;
            <div className='input-div-1'>
              Event Time
              <input type='time' className='input-book-2' value={time} onChange={handleTimeChange}></input>
            </div>
            <br />
            <FormControl sx={{ minWidth: '300px' }}>
              <InputLabel id="event-type-label">Type of Event</InputLabel>
              <Select labelId="event-type-label" id="demo-simple-select" value={typeOfEvent} label="Type of Event" onChange={handleEventTypeChange} sx={{ width: "650px" }}>
                <MenuItem value="" disabled>Type of Event</MenuItem>
                <MenuItem value={"Technical Event"}>Technical Event</MenuItem>
                <MenuItem value={"Entertainment Event"}>Entertainment Event</MenuItem>
                <MenuItem value={"Celebration Event"}>Celebration Event</MenuItem>
              </Select>
            </FormControl>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br /><br />

            <TextField label="Is contains any game in this Event(YES?NO)" value={game} onChange={handleGameChange} sx={{ width: "650px" }} />
            <br /><br />

            <TextField label="Is any Food arrange in this Event(YES?NO)" value={food} onChange={handleFoodChange} sx={{ width: "650px" }} />
            <br /><br />

            <TextField id="outlined-textarea" label="Any Queries" multiline required sx={{ width: "650px" }} value={anyQueries} onChange={handleQuChange} />
            <br /><br />

            <Button size="small" color="success" variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
        </center>
      </div>
      </div>
    </>
  );
};

export default Bookevent;








