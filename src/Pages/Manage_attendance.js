import React from "react";
import QRCode from "qrcode";
import { useState } from "react";
import "./Pages_Styles/Styles.css";
//import "../Components/Components_Styles/Margin_pages.css";


const Manage_attendance = ({ text }) => {
  const [src, setSrc] = useState("");

  const Qrgenerate = () => {
    QRCode.toDataURL(text)
      .then((data) => {
        setSrc(data);
      })
      .catch(function () {
        console.log("Error");
      });
  };
  const manualAttendance = () => {
      <form>
          <input type="field" placeholder="time"/>
      </form>
  }

  return (
    <>
      <div className="margin-all">
        <button onClick={Qrgenerate} className="btn">
          Generate QR
        </button>
        &nbsp; &nbsp; &nbsp;
        <button className="btn" onClick={manualAttendance}>Add Attendance manually</button>
        <br/>
        <img className="QR_image" src={src} />
        
      </div>
    </>
  );
};
export default Manage_attendance;
