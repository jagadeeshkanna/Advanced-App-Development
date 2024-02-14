// import React from 'react'
import {Link} from 'react-router-dom'
import './Check.css'
const Check = () => {
  return (
    <>
  



    <div className='jack1'>
    </div>
    <div className='jack2'>
        <h1 className='h1-check'>Sign in</h1>
        <br></br>
        <div className='jack3'>
        <Link to="/Adminlogin"><h3 className='h3-check'>Admin</h3></Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='jack4'>
        <Link to="/First"><h3 className='h3-check'>User</h3></Link>
        </div>
        </div>      


   
    </>
  )
}
export default Check