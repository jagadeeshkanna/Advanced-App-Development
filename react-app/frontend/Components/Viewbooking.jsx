// import axios from "axios";
// import React, { Component } from "react";
// import './viewbooking.css'
// class Viewbooking extends Component {
//   state = {
//   data: []
//   }

//   componentDidMount() {
//   axios.get('http://localhost:8080/products/map/event/getbookings')
//     .then(response => {
//       this.setState({ data: response.data });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }


//   render() {   
//     return (
        
//       <table border={1}>
//       <thead>
//         <tr className="fb">
//           <th>First_Name</th>
//           <th>Last_Name</th>
//           <th>Email</th>
//           <th>CompanyName</th>
//           <th>CompanyAddress</th>
//           <th>Phone_Number</th>
//           <th>Budget</th>
//           <th>Event_Name</th>
//           <th>Event_Type</th>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Any_Queries</th>
//           <th>Food</th>
//           <th>Game</th>
//         </tr>
//       </thead>
//       <tbody>
//         {this.state.data.map(user => (
//           <tr key={user.bid}>
//             <td>{user.bid}</td>
//             <td>{user.firstname}</td>
//             <td>{user.lastname}</td>
//             <td>{user.email}</td>
//             <td>{user.companyname}</td>
//             <td>{user.companyaddress}</td>
//             <td>{user.mobilenumber}</td>
//             <td>{user.budget}</td>
//             <td>{user.eventname}</td>
//             <td>{user.typeOfEvent}</td>
//             <td>{user.date}</td>
//             <td>{user.time}</td>
//             <td>{user.anyQueries}</td>
//             <td>{user.food}</td>
//             <td>{user.game}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     );
//   }}
  
// export default Viewbooking;

import axios from "axios";
import React, { Component } from "react";
import './viewbooking.css';

class Viewbooking extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/products/map/event/getbookings')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <table border={1}>
        <thead>
          <tr className="fb">
            <th>Booking_ID</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Email</th>
            <th>CompanyName</th>
            <th>CompanyAddress</th>
            <th>Phone_Number</th>
            <th>Budget</th>
            <th>Event_Name</th>
            <th>Event_Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Any_Queries</th>
            <th>Food</th>
            <th>Game</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(user => (
            <tr key={user.bid}>
              <td>{user.bid}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.companyname}</td>
              <td>{user.companyaddress}</td>
              <td>{user.mobilenumber}</td>
              <td>{user.budget}</td>
              <td>{user.eventname}</td>
              <td>{user.typeOfEvent}</td>
              <td>{user.date}</td>
              <td>{user.time}</td>
              <td>{user.anyQueries}</td>
              <td>{user.food}</td>
              <td>{user.game}</td>
              <td>Booked</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Viewbooking;
