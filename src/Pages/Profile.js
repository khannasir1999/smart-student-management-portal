import React from 'react'
import "../Components/Components_Styles/Margin_pages.css"
import "./Pages_Styles/Profile.css"
const Profile = () => {
const first_name = localStorage.getItem("first_name");
const last_name = localStorage.getItem("last_name")
const father_name = localStorage.getItem("father_name")
const age = localStorage.getItem("age")
const gender = localStorage.getItem("gender")
const email = localStorage.getItem("email")
const phone_no = localStorage.getItem("phone_no")
const picture = localStorage.getItem("profile_pic")


  return (
    <div className='margin-all'>
    <div className='mainContainer'>
      
      <div className='mainHeading'>
      <h1>Hello {first_name}</h1>
      </div>
      <div className='profile-img'>
        <img src={"http://localhost:8000/storage/media/" + picture} className="img-size" alt="" />
      </div>
      
      <div className='inline'>
        First Name :
         <div className='data'>{first_name}</div> 
      </div>
      <div className='inline'>
        Last Name :
        <div className='data'>{last_name}</div>
      </div>
      <div className='inline'>
        Father Name :
        <div className='data'>{father_name}</div>
        
      </div>
      <div className='inline'>
        Age :
        <div className='data'>{age}</div>
        
      </div>
      <div className='inline'>
        Gender :
        <div className='data'>{gender}</div>
        
      </div>
      <div className='inline'>
        Email :
        <div className='data'>{email} </div>
        
      </div>
      <div className='inline'>
        Phone Number :
        <div className='data'>{phone_no}</div>
        
      </div>

    </div>
    </div>
  )
};
export default Profile;