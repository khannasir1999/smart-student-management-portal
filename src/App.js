import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teacher from "./Pages/Teacher";
import Fees from "./Pages/Fees";
import Profile from "./Pages/Profile";
import NavBar from "./Components/NavBar";
import FrontScreen from "./Pages/FrontScreen";
import Edit_teacher_profile from "./Pages/Edit_teacher_profile";
import Manage_attendance from "./Pages/Manage_attendance";
import Manage_students from "./Pages/Manage_students";
import ShowAdmin from "./Pages/ShowAdmin";
import ShowStudent from "./Pages/ShowStudent";
import ShowTeacher from "./Pages/ShowTeacher";
import "./Components/Components_Styles/Margin_pages.css";
import axios from "axios";
import Departments from "./Pages/Departments";
import TermAndCondition from "./Pages/TermAndCondition";
import Footer from "./Components/Footer";
import Subject from "./Pages/Subject";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = ({ text }) => {
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token")
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    console.log(config);
    return config;})
      
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* routes of mainpage */}
          <Route path="/" index element={<FrontScreen />} />
          {/* routes of navbar */}
          <Route path="/" element={<NavBar />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="teacher" element={<Teacher />} />
            <Route path="departments" element={<Departments />} />
            <Route path="fees" element={<Fees />} />
            <Route path="subject" element={<Subject />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="edit_teacher_profile"
              element={<Edit_teacher_profile />}
            />
            <Route
              path="manage_attendance"
              element={<Manage_attendance text={text} />}
            />
            <Route path="manage_students" element={<Manage_students />} />
            <Route path="/list/teachers" element={<ShowTeacher />} />
            <Route path="/list/students" element={<ShowStudent />} />
            <Route path="/list/admin" element={<ShowAdmin />} />
            <Route path="term_and_condition" element={<TermAndCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
