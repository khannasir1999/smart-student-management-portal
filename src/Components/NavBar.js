import React from "react";
// import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements";
import { Outlet } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModelSignup from "./ModelSignup";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FcFilingCabinet,
  FcGlobe,
  FcLeftUp2,
  FcReading,
  FcServices,
  FcPortraitMode,
  FcMultipleInputs,
  FcManager,
  FcMoneyTransfer,
  FcDiploma2,
} from "react-icons/fc";
import {MdPeople,MdAccountCircle,MdManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Components_Styles/NavBar.css";
import { NavDropdown } from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux'
import { logout } from "../Action";

const NavBar = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const navItems = useSelector(state => state.loginReducer.role_name);

  const userName =
useSelector(state => state.loginReducer.first_name)
    +
    " " +
    useSelector(state => state.loginReducer.last_name);
  const profilePic = useSelector(state => state.loginReducer.picture);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const btnLogout = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/api/logout");
    if (res.status === 200) {
     dispatch(logout())
     axios.interceptors.request.use((config) => {
      config.headers.Authorization = "";
      return config;
    });

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
      {(navItems === "admin" || navItems === "Admin") ? (
        <>
          <div className="horizontal-navbar">
            <ul>
              <li>
                <img
                  src={"http://localhost:8000/storage/media/" + profilePic}
                  alt="Profile Pic"
                  className="profile-pic"
                />

                <NavDropdown
                  title={<div className="dropDown-Menu">{userName}</div>}
                  menuVariant="light"
                  id="nav-dropdown-dark-example"
                >
                  <NavDropdown.Item>
                    {" "}
                    <FcPortraitMode /> <Link to="/profile" > Profile </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    {" "}
                    <FcServices /> Setting
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <button
                      onClick={btnLogout}
                      className="logout-btn"
                      type="submit"
                    >
                      Logout
                    </button>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
          </div>

          <ProSidebar className="nav001">
            <SidebarHeader className="nav-header">Admin Portal</SidebarHeader>

            <SidebarContent>
              <Menu>
                <MenuItem icon={<FcGlobe />}>
                  <Link to="/dashboard">Dashboard</Link>
                </MenuItem>
                <MenuItem icon={<FcMultipleInputs />}>
                  <Link to="/departments">Departments</Link>
                </MenuItem>
                <MenuItem icon={<FcMoneyTransfer />}>
                  <Link to="/subject">Subjects</Link>
                </MenuItem>
                <MenuItem icon={<FcMoneyTransfer />}>
                  <Link to="/fees">Manage Fee</Link>
                </MenuItem>
                <MenuItem icon={<FcLeftUp2 />}>
                  <ModelSignup
                    isSignupVisible={isSignupVisible}
                    setIsSignupVisible={setIsSignupVisible}
                  />
                </MenuItem>
                <SubMenu title="Lists" icon={<FcFilingCabinet />}>
                  <MenuItem icon={<FcManager />}>
                    <Link to="/list/admin">Admin</Link>
                  </MenuItem>

                  <MenuItem icon={<FcPortraitMode />}>
                    <Link to="/list/teachers">Teachers</Link>
                  </MenuItem>

                  <MenuItem icon={<FcReading />}>
                    <Link to="/list/students">Students</Link>
                  </MenuItem>
                </SubMenu>
              </Menu>
            </SidebarContent>

            <SidebarFooter>
              <Menu>
                <MenuItem icon={<FcDiploma2 />}>
                  {" "}
                  <Link to="/term_and_condition">
                    Terms and Conditions{" "}
                  </Link>{" "}
                </MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </>
      ) : (navItems === "Teacher" || navItems === "teacher")  ? (
        <>
          <div className="horizontal-navbar">
            <ul>
             
              <li>
              <img
                  src={"http://localhost:8000/storage/media/" + profilePic}
                  className="profile-pic"
                />
                <NavDropdown
                  title={<div className="dropDown-Menu">{userName}</div>}
                  menuVariant="light"
                  id="nav-dropdown-dark-example"
                  style={{
                    color: "black",
                  }}
                >
                  <NavDropdown.Item href="#action/3.1">
                    {" "}
                    <FcPortraitMode /><Link to="/profile" > Profile </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    {" "}
                    <FcServices /> Setting
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <button
                      onClick={btnLogout}
                      className="logout-btn"
                      type="submit"
                    >
                      Logout
                    </button>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
          </div>

          <ProSidebar className="nav001">
            <SidebarHeader className="nav-header">Teacher Portal</SidebarHeader>

            <SidebarContent>
              <Menu>
                <MenuItem icon={<FcGlobe />}>
                  <Link to="/dashboard">Dashboard</Link>
                </MenuItem>
                <MenuItem icon = {<MdPeople/>}>
                  <Link to="/manage_attendance">Manage Attendance</Link>
                </MenuItem>
                <MenuItem icon={<MdManageAccounts/>}>
                  <Link to="/manage_students">Manage Students</Link>
                </MenuItem>
                <MenuItem icon={<MdAccountCircle/>}>
                  <Link to="/edit_teacher_profile">Profile</Link>
                </MenuItem>
              </Menu>
            </SidebarContent>

            <SidebarFooter>
              <Menu>
                <MenuItem icon={<FcDiploma2 />}>
                  {" "}
                  <Link to="/term_and_condition">
                    Terms and Conditions{" "}
                  </Link>{" "}
                </MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </>
      ) : (
        ""
      )}

      <Outlet />
    </>
  );
};

export default NavBar;
