
import React from "react";


import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    
    } from './NavbarElements';
    import { Outlet } from "react-router-dom";

const TeacherNavbar = () => {
    
    return (
        <>
        <Nav style={{backgroundColor:" rgba(0,0,0, 0.2)"}}>
		<Bars />

		<NavMenu className="TeacherNavbar">
		<NavLink to="/TeacherDashboard" >
			Dashboard
		</NavLink>
		
		
		
		</NavMenu>
        </Nav>
        <Outlet/>
        </>
        
    );
}
export default TeacherNavbar;