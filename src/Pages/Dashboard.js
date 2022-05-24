import axios from "axios";
import ShowTeacher from "./ShowTeacher";
import ShowAdmin from "./ShowAdmin";
import ShowStudent from "./ShowStudent";
const Dashboard = () => {

    const showTeacherHandler = async() => {
        const res = await axios.post("http://localhost:8000/api/user/teacher")
       
    }
    
    return (
       <>
       <ShowTeacher/>
       <ShowAdmin/>
       <ShowStudent/>
</>
 )}

export default  Dashboard;