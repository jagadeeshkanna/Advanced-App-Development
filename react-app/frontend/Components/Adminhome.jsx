import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Adminhome.css'
import { Link } from 'react-router-dom';
import { Block } from '@mui/icons-material';
const Navbar = () => {
  return (
    <>
<div className='uy23'>
        <div className="admin-home">
    <AppBar position="static">
      <Toolbar >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: -7 }}>
         Admin
        </Typography>

        <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
        <Link to="/Viewbooking">
      

        <Button color="inherit" className='ah-button-1'>View Bookings</Button>
        </Link>
        </Typography>


        <div className="ad-1">
        <Link to="/Createevent" className='admin-home-but1'>
          
          <Button color="inherit" >Create Events</Button>
          </Link>
        <Link to="/Vfeed" className='admin-home-but1'>
          
          <Button color="inherit" >View Feedbacks</Button>
          </Link>
        </div>
      <Link to="/"><Avatar>J</Avatar></Link>
      </Toolbar>
    </AppBar>
    <br></br><br></br>
    <div className='jack29'>

    </div>
      {/* <h1 className='admin-h1'>Welcome Balakavi !</h1> */}
    </div>
    </div>
    </>
  );
};

export default Navbar;
