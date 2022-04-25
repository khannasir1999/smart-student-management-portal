
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
		<NavBtnLink to='/'>Logout</NavBtnLink>
		</NavBtn>
	</Nav>
  <Outlet/>
	</>
);
};

export default NavBar;

