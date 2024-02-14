// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CardActionArea from '@mui/material/CardActionArea';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import './Profile.css'
// export default function Profile() {
//   return (
//     <>
// <div className="pro-1">
// <center>


// <Card sx={{ maxWidth: 900,height:700,background:" rgb(147, 247, 247)"}}>
//   <CardActionArea sx={{paddingTop:"30px"}}>
//     <center>
//         <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" className='card-image-9'/>

//     </center>
//     <CardContent>
//         <center>

//       <Typography gutterBottom variant="h5" component="div">
//        Balakvi B
//       </Typography>
        
//       <Typography variant="body2" color="text.secondary" className='w-1-pro'>
//       Work at Zoho
//       </Typography>
      
//     </center>
//     </CardContent>
//   </CardActionArea><br></br><br></br>
//     <center>

//     <Button size="small" color="success"variant="contained"
//     sx={{
//         width:"200px",
//     }}>
//       Edit Profile
//     </Button>
//     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//     <Button size="small" color="success"
//      sx={{
//         width:"200px"
//     }}>
//       Back
//     </Button>
//     <Typography>
//       <h4>Username : Balakavi_20</h4>
//       <h4>Email :zoho202520@gamil.com</h4>
//       <h4>Password : ********</h4>
//       <h4>Location :Sivakasi</h4>
//       <h4>Phone no:9123456780</h4>
//     </Typography>
//     </center>
// </Card>
// </center>
// </div>
//     </>
//   );
// }











// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CardActionArea from '@mui/material/CardActionArea';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import './Profile.css';

// const Profile = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [location, setLocation] = useState('');
//   const [phoneNo, setPhoneNo] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const handlePhoneNoChange = (event) => {
//     setPhoneNo(event.target.value);
//   };

//   const handleSubmit = () => {
//     // You can perform any action with the form data here
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Location:', location);
//     console.log('Phone Number:', phoneNo);
//   };

//   return (
//     <>
//       <div className="pro-1">
//         <center>
//           <Card sx={{ maxWidth: 900, height: 700, background: "rgb(147, 247, 247)" }}>
//             <CardActionArea sx={{ paddingTop: "30px" }}>
//               <center>
//                 <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" className='card-image-9' />
//               </center>
//               <CardContent>
//                 <center>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Balakvi B
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" className='w-1-pro'>
//                     Work at Zoho
//                   </Typography>
//                 </center>
//               </CardContent>
//             </CardActionArea>
//             <br></br><br></br>
//             <center>
//               <Button size="small" color="success" variant="contained"
//                 sx={{
//                   width: "200px",
//                 }}>
//                 Edit Profile
//               </Button>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <Button size="small" color="success"
//                 sx={{
//                   width: "200px"
//                 }}>
//                 Back
//               </Button>
//               <Typography>
//               <p>Name: {name}</p>
//         <p>Email: {email}</p>
//         <p>Password: {password}</p>
//         <p>Location: {location}</p>
//         <p>Phone Number: {phoneNo}</p>
//               </Typography>
//             </center>
//           </Card>
//         </center>
//       </div>
//       <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
//         <h2>User Information</h2>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </label>
//         <br />
//         <label>
//           Location:
//           <input type="text" value={location} onChange={handleLocationChange} />
//         </label>
//         <br />
//         <label>
//           Phone Number:
//           <input type="tel" value={phoneNo} onChange={handlePhoneNoChange} />
//         </label>
//         <br />
//         <button onClick={handleSubmit}>Submit</button>
//         <hr />
       
//       </div>
//     </>
//   );
// };

// export default Profile;








import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Profile.css';
import MYPIC from '../assets/MYPIC.jpeg'
const Profile = () => {
  const [name, setName] = useState('Balakvi B');
  const [email, setEmail] = useState('zoho202520@gmail.com');
  const [password, setPassword] = useState('********');
  const [location, setLocation] = useState('Sivakasi');
  const [phoneNo, setPhoneNo] = useState('9123456780');
  const [editMode, setEditMode] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleBackClick = () => {
    setEditMode(false);
  };

  const handleSubmit = () => {
    // You can perform any action with the form data here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Location:', location);
    console.log('Phone Number:', phoneNo);

    // Exit edit mode after submission
    setEditMode(false);
  };

  return (
    <>
      <div className="pro-1">
        <center>
          <Card sx={{ maxWidth: 700, height: 850, background: "rgb(147, 247, 247)" }}>
            <CardActionArea sx={{ paddingTop: "30px" }}>
              <center>
                {/* <img src={MYPIC} className='card-image-9' /> */}
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" className='card-image-9' />
              </center>
              <CardContent>
                <center>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className='w-1-pro'>
                    Work at Zoho
                  </Typography>
                </center>
              </CardContent>
            </CardActionArea>
            <br></br><br></br>
            <center>
              {editMode ? (
                <>
                  {/* Edit mode */}
                  <Button size="small" color="success" variant="contained" onClick={handleSubmit}
                    sx={{
                      width: "200px",
                    }}>
                    Save Changes
                  </Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button size="small" color="success" onClick={handleBackClick}
                    sx={{
                      width: "200px"
                    }}>
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  {/* Display mode */}
                  <Button size="small" color="success" variant="contained" onClick={handleEditClick}
                    sx={{
                      width: "200px",
                    }}>
                    Edit Profile
                  </Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button size="small" color="success" onClick={() => console.log("Back clicked")}
                    sx={{
                      width: "200px"
                    }}>
                    Back
                  </Button>
                  <br></br><br></br>
                  <Typography className='try-pro-1'>
                    <div className="para-div-1">
                    <p className='para1-pro'>Name:{name}</p>

                    </div>
                    <div className="para-div-1">
                    <p className='para1-pro'>Email: {email}</p>

                    </div>
                    <div className="para-div-1">
                    <p className='para1-pro'>Password: {password}</p>

                    </div>
                    <div className="para-div-1">
                      
                    <p className='para1-pro'>Location: {location}</p>
                    </div>
                    <div className="para-div-1">
                    <p className='para1-pro'>Phone Number: {phoneNo}</p>

                    </div>
                  </Typography>
                </>
              )}
            </center>
          </Card>
        </center>
      </div>
      {editMode && (
        <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
          <h2>User Information</h2>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <label>
            Location:
            <input type="text" value={location} onChange={handleLocationChange} />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="tel" value={phoneNo} onChange={handlePhoneNoChange} />
          </label>
          <br />
        </div>
      )}
    </>
  );
};

export default Profile;
