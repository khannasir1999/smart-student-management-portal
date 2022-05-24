import React from "react";
import QRCode from 'qrcode';
import { useState} from "react";
import "./Pages_Styles/Styles.css"

const Manage_attendance = ({text}) => {
    const [src , setSrc] = useState('');
     
  
    const Qrgenerate = () => {
        
            QRCode.toDataURL(text).then((data) => {
            setSrc(data)
            

    
            }).catch(function(){
                console.log("Error");
            })
            
          
          
    }

    return (
        <>

    <button onClick= {Qrgenerate} className = "btn">
        Generate QR
    </button>
    
    <img className="QR_image"  src = {src}/>
        </>
    )
}
export default Manage_attendance;