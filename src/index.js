import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
const course_name = localStorage.getItem("course_name")
const first_name = localStorage.getItem("first_name")
const last_name = localStorage.getItem("last_name")
const name = first_name  + " " + last_name
const email = localStorage.getItem("email")
ReactDOM.render(
  <React.StrictMode>
    <App
     attendance_data = {JSON.stringify({
              name: name,
              email: email,
              course_name: course_name,
              Date: new Date().toLocaleString(),
              

              
            
            })}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
