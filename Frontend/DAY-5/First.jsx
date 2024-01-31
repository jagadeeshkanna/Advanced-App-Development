import {Link} from 'react-router-dom'
import './First.css'

const First = () => {
  return (
    <>
    <div className='jack1'>
    </div>
    <div className='jack2'>
        <h1>Sign in</h1>
        <br></br>
        <div className='jack3'> 
          <Link to="/Alogin">
            <h3>Admin</h3>
            </Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='jack4'>
          <Link to="/Login"><h3>User</h3></Link>
        </div>
        </div>      
    </>
  )
}
export default First