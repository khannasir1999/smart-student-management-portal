import Login from "./Pages/Login";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attendance from './Pages/Attendance'
import RegisterationCard from './Pages/RegisterationCard'
import Fees from './Pages/Fees'
import Profile from './Pages/Profile'
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path='/' element={<NavBar/>}>
        <Route path="dashboard" element={<Dashboard/>}/> 
        <Route path="attendance" element={<Attendance/>}/>
        <Route path="registration-card" element={<RegisterationCard/>} />
        <Route path="fees" element={<Fees/>} />
        <Route path="profile" element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
