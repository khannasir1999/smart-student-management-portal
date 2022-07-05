import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import "./Components_Styles/Model.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import {
  first_name,
  last_name,
  father_name,
  email,
  phone_no,
  age,
  gender,
  role_name,
  auth_token,
  picture,
} from "../Action";
import { useDispatch } from "react-redux";

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
    if (inputEmail) {
      setInputError("");
    }
  }, [inputEmail]);

  useEffect(() => {
    if (inputPassword) {
      setInputError("");
    }
  }, [inputPassword]);
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email: inputEmail,
        password: inputPassword,
      });
      if (res.status === 200) {
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("first_name",res.data.user.first_name);
        localStorage.setItem("last_name",res.data.user.last_name);
        localStorage.setItem("email",res.data.user.email);
        dispatch(auth_token(res.data.token));
        dispatch(first_name(res.data.user.first_name));
        dispatch(last_name(res.data.user.last_name));
        dispatch(father_name(res.data.user.father_name));
        dispatch(gender(res.data.user.gender));
        dispatch(age(res.data.user.age));
        dispatch(phone_no(res.data.user.phone_no));
        dispatch(picture(res.data.user.picture));
        dispatch(email(res.data.user.email));
        dispatch(role_name(res.data.user.role_name));
        // localStorage.setItem("auth_token", res.data.token);
        // localStorage.setItem("role_name", res.data.user.role_name);
        //  localStorage.setItem("profile_pic",res.data.user.picture);
        //  localStorage.setItem("phone_no",res.data.user.phone_no);
        //  localStorage.setItem("age",res.data.user.age);
        //  localStorage.setItem("gender",res.data.user.gender);
        //  localStorage.setItem("father_name",res.data.user.father_name);
        swal({
          position: "center",
          icon: "success",
          title: "Successfully Loged in",
          timer: 1000,
        });
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

          <button className="form-btn" type="submit" onClick={login}>
            Login
          </button>
        </form>
        <div className="form">
          <button className="switch-btn" onClick={handleModol}>
            Forget Password ?
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModelLogin;
