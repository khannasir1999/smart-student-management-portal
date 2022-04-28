
import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,

} from './NavbarElements';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";


const NavBar = () => {
	const navigate = useNavigate();
	
	const btnLogout = async (e) => {
		e.preventDefault();

		const res = await axios.post("http://localhost:8000/api/admin_logout")
		if (res.status === 200) {
			localStorage.removeItem("auth_user");
			localStorage.removeItem("auth_token");
			swal({
			  position: "center",
			  icon: "success",
			  title: "Successfully Loged out",
			  timer: 1500,
			});
			navigate("/");
		  }
		
	}
return (
	<>
	<Nav style={{backgroundColor:" rgb(0,0,0)",backgroundColor:" rgba(0,0,0, 0.2)" , color:"black"}} >
		<Bars />

		<NavMenu>
		<NavLink to="/dashboard">
			Dashboard
		</NavLink>
		<NavLink to="/teacher" >
			Teacher
		</NavLink>
		<NavLink to="/registration_card" >
			Registration card
		</NavLink>
		<NavLink to="/fees" >
			fee
		</NavLink>
		<NavLink to="/profile" >
			Profile
		</NavLink>
		
		
		</NavMenu>
		<NavBtn onClick={btnLogout} className="logout-btn" type="submit">
		
		Logout
		
		</NavBtn>
	</Nav>
  <Outlet/>
	</>
);
};

export default NavBar;

