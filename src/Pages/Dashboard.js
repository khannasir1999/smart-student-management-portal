import "./Dashboard.css";
import ModelAddTeacher from "../Components/ModelAddTeacher";
import { useState, useEffect } from "react";
import axios from "axios";
import CardShowTeacher from "../Components/CardShowTeacher";
const Dashboard = () => {
    const [getTeacher, setGetTeacher] = useState([])
   
    useEffect(() => {
      teacherData()
    }, [])
    
    const teacherData = async() =>{
        const res = await axios.get("http://localhost:8000/api/teachers");
        console.log(res);
        setGetTeacher(res.data)
    }






    return (
        <>
        <div><ModelAddTeacher/></div>
        <div><CardShowTeacher getTeacher={getTeacher} /></div>


        </>
    );
}
export default Dashboard;
