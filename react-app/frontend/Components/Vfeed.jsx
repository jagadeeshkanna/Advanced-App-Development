
import axios from "axios";
import React, { Component } from "react";

// import './Vfeed.css';
class Vfeed extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/products/map/event/getfeedback')
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
          <tr className="fb9">
            <th>F_ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Feed_back</th>
            
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(user => (
            <tr key={user.fid}>
              <td>{user.fid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.rating}</td>
              <td>{user.feedback}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Vfeed;