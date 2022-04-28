import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attendance from './Pages/Attendance'
import RegisterationCard from './Pages/RegisterationCard'
import Fees from './Pages/Fees'
import Profile from './Pages/Profile'
import NavBar from "./Components/NavBar";
import FrontScreen from "./Pages/FrontScreen";
import axios from "axios";
import TeacherDashboard from "./Pages/TeacherDashboard";
import TeacherNavbar from "./Components/TeacherNavbar";
import MarkAttendance from "./Pages/MarkAttendence";

function App() {

  axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  })
  return (
    <>
    
    <BrowserRouter>
      <Routes>
      {/* routes of mainpage */}
        <Route path="/" index element={<FrontScreen/>} />
       {/* routes of navbar */}
        <Route path="/" element={<NavBar/>} >
          <Route path="dashboard" element={<Dashboard/>}/> 
          <Route path="attendance" element={<Attendance/>}/>
          <Route path="registration_card" element={<RegisterationCard/>} />
          <Route path="fees" element={<Fees/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
        {/* routes for teacher */}
        <Route path="/" element = {<TeacherNavbar/>}>
          <Route path="TeacherDashboard" element ={<TeacherDashboard/>}/>
          <Route path="MarkAttendence" element ={<MarkAttendance/>}/>

        </Route>
    
      </Routes>
    </BrowserRouter>
    </>
  );
  
  
}

export default App;
