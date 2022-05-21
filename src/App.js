import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teacher from './Pages/Teacher'
import RegisterationCard from './Pages/RegisterationCard'
import Fees from './Pages/Fees'
import Profile from './Pages/Profile'
import NavBar from "./Components/NavBar";
import FrontScreen from "./Pages/FrontScreen";
import axios from "axios";
import { useState } from "react";





function App() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

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
        <Route path="/" element={<NavBar isSignupVisible={isSignupVisible}
              setIsSignupVisible={setIsSignupVisible}/>} >
          <Route path="dashboard" element={<Dashboard/>}/> 
          <Route path="teacher" element={<Teacher/>}/>
          <Route path="registration_card" element={<RegisterationCard/>} />
          <Route path="fees" element={<Fees/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
      

    
    
      </Routes>
    </BrowserRouter>
    </>
  );
  
  
}

export default App;