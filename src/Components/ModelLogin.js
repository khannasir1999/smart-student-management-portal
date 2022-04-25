import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import "./Components_Styles/Model.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";

const ModelLogin = (props) => {
  // code of model visibility........
  const showModal = () => {
    props.setIsLoginVisible(true);
  };
  const handleCancel = () => {
    props.setIsLoginVisible(false);
  };
  const handleModol = () => {
    props.setIsLoginVisible(false);
    props.setIsSignupVisible(true);
  };

  //code of post data LOGIN............
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    if(inputEmail){
    setInputError("")}
  }, [inputEmail]);

  useEffect(() => {
    if(inputPassword){
    setInputError("")}
  }, [inputPassword])
  

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/admin_login", {
        email: inputEmail,
        password: inputPassword,
      });
      if (res.status === 200) {
        localStorage.setItem("auth_user", res.data.user);
        localStorage.setItem("auth_token", res.data.token);
        swal("Welcome Back", "Successfully Loged in ", "success");
        props.setIsLoginVisible(false);
        navigate("/dashboard");
      }
    } catch (error) {
      setInputError("The provided credentials are incorrect.");
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        title="Login"
        visible={props.isLoginVisible}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <form onSubmit={loginSubmit} className="form">
          <input
            type="email"
            name="email"
            placeholder=" Enter Email"
            className="form-input"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder=" Enter Password"
            className="form-input"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        <div style={{ color: "red", margin: "10px" }}>{inputError}</div>

          <button className="form-btn" type="submit">
            Login
          </button>

          
        </form>
        <div className="form">
          Don't have account?{" "}
          <button className="switch-btn"
            onClick={handleModol}
          >
            Create Account
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModelLogin;
