import React from 'react'
import { useState} from 'react';
import './ViewEvents.css'


function ViewEvents() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
        
      <div className="be-overall">
        <div className='be-h1'>
            <h2>View Booked & Past Events:</h2>
        </div>
        <br></br><br></br>
        

         <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Date</th>   
            <th>Company Address</th>
            <th>MobileNumber</th>
            <th>Name of event</th>
            <th>Budject</th>
            {/* <th>Actions on Events</th> */}
            <th>Booking Status</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>raj</td>
              <td>pal</td>
              <td>727721euit058@skcet.ac.in</td>
              <td>Infosys</td>
              <td>2024/03/31</td>
              <td>chennai</td>
              <td>123456789</td>
              {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
              {/* <td><button className="con">Confirmed</button></td> */}
            </tr>
            
            <tr>
            <td>Pa</td>
              <td>van</td>
              <td>727721euit061@skcet.ac.in</td>
              <td>wipro</td>
              <td>2024/07/11</td>
              <td>chennai</td>
              <td>987654321</td>
              {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
              {/* <td><button className="pe">Pending</button></td> */}
            </tr>
            <tr>
            <td>Pavan</td>
              <td>raj</td>
              <td>727721euit057@skcet.ac.in</td>
              <td>zoho</td>
              <td>2024/11/27</td>
              <td>chennai</td>
              <td>928374651</td>
              {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
              {/* <td><button className="re">Rejected</button></td> */}
            </tr>
            
        </tbody>
      </table>


      <br></br><br></br> <br></br> <br></br>
        </div>
       
        
        </>
  )
}


export default ViewEvents