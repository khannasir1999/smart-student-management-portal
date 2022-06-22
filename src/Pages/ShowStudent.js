import React, { useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { userGet } from '../Action';


export default function ShowStudent() {

  const [teacherData, setTeacherData] = useState([])

  useEffect(() => {
    getStudent();
  }, [])

  const getStudent = async () => {
    const res = await axios.get("http://localhost:8000/api/users/student");
    console.log(res);
    setTeacherData(res.data)
  }
  const dispatch = useDispatch()
  const reRender = useSelector(state => state.reRenderReducer.userGet)
  if (reRender === "reRender") {
     getStudent()
     dispatch(userGet("")) 
  } 
  
  return <div className='margin-all'>
    <div style={{ textAlign: "center", marginBottom: "10px" }} ><h2 style={{ fontWeight: "bold" }}>Student's Data</h2></div>

    <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={{
      columns: [
        {
          label: 'Name',
          field: 'name',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Father Name',
          field: 'father_name',
          width: 270,
        },
        {
          label: 'Gender',
          field: 'gender',
          width: 200,
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Phone No',
          field: 'phone_no',
          sort: 'disabled',
          width: 150,
        },
        {
          label: 'Email Address',
          field: 'email',
          sort: 'disabled',
          width: 100,
        },
        {
          label: 'Picture',
          field: 'picture',
          sort: 'disabled',
          width: 100,
        }
      ],
      rows: teacherData.map((items) => {
        return (
          {
            name: items.first_name + " " + items.last_name,
            father_name: items.father_name,
            gender: items.gender,
            age: items.age,
            phone_no: items.phone_no,
            email: items.email,
            picture: <img src={"http://localhost:8000/storage/media/" + items.picture} alt=" user Picture" className='data-img' />

          }
        )
      })

    }} searchTop searchBottom={false} /> </div>;
}