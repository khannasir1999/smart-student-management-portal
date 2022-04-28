import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import "./Components_Styles/Model.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ModelLogin = (props) => {
  const login_teacher = (e) => {
    
  }
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
    if (inputEmail) {
      setInputError("")
    }
  }, [inputEmail]);

  useEffect(() => {
    if (inputPassword) {
      setInputError("")
    }
  }, [inputPassword])

//Login as an admin
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
        swal({
          position: 'center',
          icon: 'success',
          title: 'Successfully Loged in',
          timer: 1500
        })
        props.setIsLoginVisible(false);
        navigate("/dashboard");
      }
    } catch (error) {
      setInputError("invalid credentials");
    }
  };





  const loginteacher = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/teacher_login", {
        email: inputEmail,
        password: inputPassword,
        
      });
      if (res.status === 200) {
        localStorage.setItem("auth_user", res.data.user);
        localStorage.setItem("auth_token", res.data.token);
        swal({
          position: 'center',
          icon: 'success',
          title: 'Successfully Loged in',
          timer: 1500
        })
        props.setIsLoginVisible(false);
        navigate("/dashboard");
      }
    } catch (error) {
      setInputError("invalid credentials");
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
        <form className="form">
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

          <button className="form-btn" type="submit" onClick={loginSubmit}>
            Login as an admin
          </button>
          <button className="form-btn" type="submit" onClick={loginteacher}>
            Login as a teacher
          </button>
        </form>
        <div className="form">
          Don't have account?
          <button className="switch-btn" onClick={handleModol}>
            Create Account
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModelLogin;
