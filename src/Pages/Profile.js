import React from 'react'
import { useSelector } from 'react-redux';
import "../Components/Components_Styles/Margin_pages.css"
import "./Pages_Styles/Profile.css"
const Profile = () => {
const first_name =useSelector(state => state.loginReducer.first_name);
const last_name = useSelector(state => state.loginReducer.last_name); 
const father_name = useSelector(state => state.loginReducer.father_name)
const age = useSelector(state => state.loginReducer.age)
const gender = useSelector(state => state.loginReducer.gender)
const email = useSelector(state => state.loginReducer.email)
const phone_no = useSelector(state => state.loginReducer.phone_no)
const picture = useSelector(state => state.loginReducer.picture)

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