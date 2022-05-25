import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teacher from './Pages/Teacher'
import RegisterationCard from './Pages/Departments'
import Fees from './Pages/Fees'
import Profile from './Pages/Profile'
import NavBar from "./Components/NavBar";
import FrontScreen from "./Pages/FrontScreen";
import Teacher_dashboard from "./Pages/Teacher_dashboard";
import Edit_teacher_profile from "./Pages/Edit_teacher_profile";
import Manage_attendance from "./Pages/Manage_attendance";
import Manage_students from "./Pages/Manage_students";
import ShowAdmin from "./Pages/ShowAdmin";
import ShowStudent from "./Pages/ShowStudent";
import ShowTeacher from "./Pages/ShowTeacher";
import "./Components/Components_Styles/Margin_pages.css"
import axios from "axios";
import Departments from "./Pages/Departments";
import TermAndCondition from "./Pages/TermAndCondition";

function App({text}) {

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
          <Route path="teacher" element={<Teacher/>}/>
          <Route path="departments" element={<Departments/>} />
          <Route path="fees" element={<Fees/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="teacher_dashboard" element={<Teacher_dashboard/>} />
          <Route path="edit_teacher_profile" element={<Edit_teacher_profile/>} />
          <Route path="manage_attendance" element={<Manage_attendance text={text}/>} />
          <Route path="manage_students" element={<Manage_students/>} />
          <Route path="/list/teachers" element={<ShowTeacher/>} />
          <Route path="/list/students" element={<ShowStudent/>} />
          <Route path="/list/admin" element={<ShowAdmin classname="right-margin" />} />
          <Route path="term_and_condition" element={<TermAndCondition/>} />

          

          
          
        </Route>
    
      </Routes>
    </BrowserRouter>
    </>
  );
  
  
}

export default App;