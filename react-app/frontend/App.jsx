import React from 'react'
import First from './Components/First'
import Home from './Components/Home'
// import Summa from './Components/Slider'
import  Card  from './Components/Card'
import  Events  from './Components/Events'
import Bookevent from './Components/Bookevent'
 import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Editevent from './Components/Editevent'
import Footer from './Components/Footer'
import Cancle from './Components/Cancle'
import Profile from './Components/Profile'
import Adminlogin from './Components/Adminlogin'
import Adminhome from './Components/Adminhome'
import  Createevent from './Components/Createevent'
import Check from './Components/Check'
import Eventform from './Components/Eventform'
import Viewbooking from './Components/Viewbooking'
import Emailverify from './Components/Emailverify'
import Vfeed from './Components/Vfeed'
import Feedback from './Components/Feedback'
import './App.css'

const App = () => {  
  return (
  <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Check/>}></Route>
          <Route path='/First' element={<First/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Events' element={<Events/>}></Route>
          <Route path='/Bookevent' element={<Bookevent/>}></Route>
         <Route path='/Editevent' element={<Editevent/>}></Route>
         <Route path='/Footer' element={<Footer/>}></Route>
         <Route path='/Cancle' element={<Cancle/>}></Route>
         <Route path='/Profile' element={<Profile/>}></Route>
         <Route path='/Adminlogin' element={<Adminlogin/>}></Route>
         <Route path='/Adminhome' element={<Adminhome/>}></Route>
         <Route path='/Createevent' element={< Createevent/>}></Route>
         <Route path='/Eventform' element={<Eventform/>}></Route>
         <Route path='/Viewbooking' element={<Viewbooking/>}></Route>
         <Route path='/Emailverify' element={<Emailverify/>}></Route>   
         <Route path='/Vfeed' element={<Vfeed/>}></Route>   
         <Route path='/Feedback' element={<Feedback/>}></Route>   
         
         
         
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App