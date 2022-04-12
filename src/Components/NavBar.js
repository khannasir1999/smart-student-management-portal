
import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to="/dashboard" >
			Dashboard
		</NavLink>
		<NavLink to="/attendance" >
			Attendance
		</NavLink>
		<NavLink to="/registration_card" >
			Registration card
		</NavLink>
		<NavLink to="/fees" >
			Fee
		</NavLink>
		<NavLink to="/profile" >
			Profile
		</NavLink>
		
		
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Login'>Logout</NavBtnLink>
		</NavBtn>
	</Nav>
  <Outlet/>
	</>
);
};

export default NavBar;

// import {Link, Outlet} from 'react-router-dom';

// const NavBar = () => {
  
  
//   return (
    
    
//     <>
//     <ul>
//       <li><Link to="/dashboard" >Dash Board</Link></li>
//       <li><Link to="/attendance" >Attendance</Link></li>
//       <li><Link to="/registration-card" >Registration Card</Link></li>
//       <li><Link to="/fees" >Fees</Link></li>
//       <li><Link to="/profile" >Profile</Link></li>
//       <li><Link to="/Login">Logout</Link></li>
//     </ul>
//   <Outlet/>
    

//     </>
    
    
  
    
//   )
// };
// export default NavBar;