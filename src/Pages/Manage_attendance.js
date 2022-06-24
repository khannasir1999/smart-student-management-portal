import React from "react";
import QRCode from "qrcode";
import { useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import "./Pages_Styles/Styles.css";
import ModelSelectDepartment_cource from "../Components/ModelSelectDepartment_cource";
import axios from "axios";
import { useEffect } from "react";

const Manage_attendance = ({ attendance_data }) => {
  
  const [src, setSrc] = useState("");
  const [attendance, setAttendance] = useState([])
  const [studentData, setStudentData] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState("")
  
  useEffect(() => {
    getStudentData();
    getAttendanceData()
  }, []);

  // QR code .......................................................
  const Qrgenerate = () => {
    QRCode.toDataURL(attendance_data).then(setSrc);
  };
  const manualAttendance = () => {
    <form>
      <input type="field" placeholder="time" />
    </form>;
  };
// for Attendance data .............................................
  const getAttendanceData = async () => {
    const res = await axios.get(
      "http://localhost:8000/api/get_attendance"
    );
    console.log(res);
    setAttendance(res.data);

  };
  



 // for students name ..............................................
  const getStudentData = async() => {
    const res =await axios.get("http://localhost:8000/api/users/student")
    setStudentData(res.data);
  };

  return (
    <>
      <div className="margin-all">
        <button onClick={Qrgenerate} className="btn">
          Generate QR
        </button>
        &nbsp; &nbsp; &nbsp;
        <button className="btn" onClick={manualAttendance}>
          Add Attendance manually
        </button>
        <ModelSelectDepartment_cource />
        <br />
        <img className="QR_image" src={src} />
      
      <MDBDataTableV5
        hover
        entriesOptions={[10, 20, 25]}
        entries={10}
        pagesAmount={10}
        data={{
          columns: [
            {
              
                label: "Student_id",
                field: "id",
              
              },
              {
              label: "Name",
              field: "name",
              width: 50,
              attributes: {
                "aria-controls": "DataTable",
                "aria-label": "Name",
              },
            },

            {
              label: "Gender",
              field: "gender",
              width: 200,
            },
            {
              label: "Status",
              field: "status"
             

            },

          
          ],
          rows: studentData.map((items) => {
            return {
              name: items.first_name + " " + items.last_name,
              gender: items.gender,
              id: items.id,
              status: attendance.find(val=> val.student_id === items.id)? "present" : "absent"
              
              
              


             
            }
          }),
        }}
        searchTop
        searchBottom={false}
      />
      </div>
    </>
  );
};
export default Manage_attendance;
