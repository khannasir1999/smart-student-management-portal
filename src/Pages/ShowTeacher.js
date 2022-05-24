import React, { useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { useEffect } from 'react';
import axios from 'axios';

export default function ShowTeacher() {
    
const [teacherData, setTeacherData]= useState([])

    useEffect(() => {
      getTeacher();
    }, [])
    

    const getTeacher = async () => {
        const res = await axios.get("http://localhost:8000/api/users/teacher");
        console.log(res);
        setTeacherData(res.data)
      }

  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={{
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
        }
        ],
      rows: teacherData.map((items)=>{
               return(
                   {
                       name: items.first_name + " " + items.last_name ,
                       father_name : items.father_name,
                       gender : items.gender,
                       age : items.age,
                       phone_no : items.phone_no,
                       email : items.email
   
                   }
               )
           })

  }} searchTop searchBottom={false} />;
}