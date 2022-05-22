import React from "react";
import axios from "axios";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import CardShowTeacher from "../Components/CardShowTeacher";


const Dashboard = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false)
  // states of post data...........................
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone_no, setRegisterPhone_no] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPassword_confirmation, setRegisterPassword_confirmation] = useState("");
  const [title, setTitle] = useState("");
  const [count , setCount] = useState("");

  //  code for get Teachers data ....................
  const [teacherData, setTeacherData] = useState([])
  const baseUrl = "http://127.0.0.1:8000/api/teacher"

  useEffect(() => {
    getTeacher()
  }, [])
  useEffect(() => {
    count_teacher()
  
    
  }, [])
  

  const getTeacher = async () => {
    const res = await axios.get(baseUrl);
    console.log(res);
    setTeacherData(res.data)
  }

  // code for Delete Teacher.......................
  const delTeacher = async (id) => {
    const res = await axios.delete(baseUrl + id)
    console.log(res)
    getTeacher()
  }

  // code for Update teacher...........................
  const [putId, setPutId] = useState("")

  const editTeacher = async () => {
    const res = await axios.put(baseUrl + putId, {
      name: registerName,
      email: registerEmail,
      phone_no: registerPhone_no

    })
    setIsSignupVisible(false)
    getTeacher()
  }
 const baseUrl2 = "http://127.0.0.1:8000/api/users/teacher_count"

 const count_teacher = async () => {
   const res = await axios.get(baseUrl2);
   console.log(res);
   setCount(res.data);
 }
 return(

   <>
   <div style={{ margin: "10px" }}>
          <CardShowTeacher
            teacherData={teacherData}
            getTeacher={getTeacher}
            delTeacher={delTeacher}
            editTeacher={editTeacher}
            // Passing props of post data
            setRegisterName={setRegisterName}
            registerName={registerName}
            setRegisterEmail={setRegisterEmail}
            registerEmail={registerEmail}
            setRegisterPhone_no={setRegisterPhone_no}
            registerPhone_no={registerPhone_no}
            setRegisterPassword={setRegisterPassword}
            registerPassword={registerPassword}
            setRegisterPassword_confirmation={setRegisterPassword_confirmation}
            registerPassword_confirmation={registerPassword_confirmation}
            setTitle={setTitle}
            title={title}
            setPutId={setPutId}
            isSignupVisible={isSignupVisible}
            setIsSignupVisible={setIsSignupVisible}
          />
        </div>

   <button onClick={count_teacher}>
     Show number of teachers
     
   </button>
  
  
   
   </>
 )
 }

export default  Dashboard;