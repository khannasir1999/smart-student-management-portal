import {Link, Outlet} from 'react-router-dom'
const NavBar = () => {
  
  return (
    <>
    <ul>
      <li><Link to="/dashboard" >Dash Board</Link></li>
      <li><Link to="/attendance" >Attendance</Link></li>
      <li><Link to="/registration-card" >Registration Card</Link></li>
      <li><Link to="/fees" >Fees</Link></li>
      <li><Link to="/profile" >Profile</Link></li>
    </ul>
    <Outlet/>
    </>
  )
};
export default NavBar;