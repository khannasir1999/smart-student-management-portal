
import React from "react";
import swal from "sweetalert";


import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    
    } from './NavbarElements';
    import { Outlet } from "react-router-dom";
import { Button } from "antd";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const TeacherNavbar = () => {
    const navigate = useNavigate();
    const TeacherLogout = async (e) => {
		e.preventDefault();

		const res = await axios.post("http://localhost:8000/api/teacher_logout")
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
        <Nav style={{backgroundColor:" rgba(0,0,0, 0.2)"}}>
		<Bars />

		<NavMenu className="TeacherNavbar">
		<NavLink to="/TeacherDashboard" >
			Dashboard
		</NavLink>
		
		
		
		</NavMenu>
        <NavBtn onClick={TeacherLogout} className="logout-btn" type="submit">
		
		Logout
		
		</NavBtn>
        </Nav>
        <Outlet/>
        </>
        
    );
}
export default TeacherNavbar;