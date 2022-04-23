import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./Model.css";
import { SHOW_ALL } from "rc-tree-select";

const ModelLogin = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const [loginInput, setLogingInput] = useState({
    email:"",
    password:"",
    error_list:[],
  });

  const handleInput = (e) =>{
    e.persist()
    setLogingInput({...loginInput, [e.target.name]:e.target.value})
  };

  const loginSubmit = (e)=>{
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password
    }

    const checkLogin = async () =>{
      const res = await axios.post('http://localhost:8000/api/admin', data)
      if(res.data.status === 200){
        localStorage.setItem("auth_user", res.data.user)
        localStorage.setItem("auth_token", res.data.token);
        swal("success",res.data.message, 'success')
      }
      else if(res.data.status === 400){
        swal("unsuccessful", res.data.message, "unsuccessful")
      }
      else{
        
      }
    }
  }


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        title="Login"
        visible={isModalVisible}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <form className="form">
          <input
            type="email"
            placeholder="Enter Email"
            className="form-input"
          />
          <br />

          <input
            type="password"
            placeholder="Enter Password"
            className="form-input"
          />
          <br />

          <button className="form-btn">Login</button>
        </form>
      </Modal>
    </>
  );
};

export default ModelLogin;
