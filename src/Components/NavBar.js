import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements";
import { Outlet } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModelSignup from "./ModelSignup";

const NavBar = (props) => {

  const navItems = localStorage.getItem("role_name");

  const navigate = useNavigate();

  const btnLogout = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/api/logout");
    if (res.status === 200) {
      localStorage.removeItem("auth_user");
      localStorage.removeItem("auth_token");
      swal({
        position: "center",
        icon: "success",
        title: "Successfully Loged out",
        timer: 1000,
      });
      navigate("/");
    }
  };
  return (
    <>
      <Nav
        style={{
          backgroundColor: " rgb(0,0,0)",
          backgroundColor: " rgba(0,0,0,0.2)",
        }}
      >
        <Bars />
        {navItems === "admin" ? (
          <NavMenu>
            <NavLink to="/dashboard">Admin Dashboard</NavLink>
            <NavLink to="/teacher">Add Teacher</NavLink>
            <NavLink to="/registration_card">Registeration Card</NavLink>
            <NavLink to="/fees">Fees</NavLink>
            <div style={{
				backgroundColor: " rgba(0,0,0,0.0)",
				color: "gray",
				border: "1px  rgba(0,0,0,0.0)",
			}}><ModelSignup/></div>

			
          </NavMenu>
        ) : (
          <NavMenu>
            <NavLink to="/dashboard">Teacher Dashboard</NavLink>
            <NavLink to="/teacher">Student Marks</NavLink>
            <NavLink to="/registration_card">TimeTable</NavLink>
            <NavLink to="/fees">Attendance</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </NavMenu>
        )}

        <NavBtn onClick={btnLogout} className="logout-btn" type="submit">
          Logout
        </NavBtn>
      </Nav>
      <Outlet />
    </>
  );
};

export default NavBar;
