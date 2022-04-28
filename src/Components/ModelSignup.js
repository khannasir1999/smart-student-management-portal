import { Modal, Button } from "antd";
import "./Components_Styles/Model.css";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const ModelSignup = (props) => {
  // code of model visibility..........................................
  const showModal = () => {
    props.setIsSignupVisible(true);
  };
  const handleCancel = () => {
    props.setIsSignupVisible(false);
  };
  const handleModol = () => {
    props.setIsSignupVisible(false);
    props.setIsLoginVisible(true);
  };

  // code for post register data.........................................

  // states for registration user.........
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone_no, setRegisterPhone_no] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPassword_confirmation, setRegisterPassword_confirmation] =
    useState("");

  //code for error handaling............
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone_no, setErrPhone_no] = useState("");
  const [errPassword, setErrPassword] = useState("");

  useEffect(() => {
    if (
      registerName ||
      registerEmail ||
      registerPhone_no ||
      registerPassword ||
      registerPassword_confirmation
    ) {
      setErrName("");
      setErrEmail("");
      setErrPassword("");
      setErrPhone_no("");
    }
  }, [
    registerName,
    registerEmail,
    registerPassword,
    registerPassword_confirmation,
    registerPhone_no,
  ]);

  // fucntion for registration of data...
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/admin_register", {
        name: registerName,
        email: registerEmail,
        phone_no: registerPhone_no,
        password: registerPassword,
        password_confirmation: registerPassword_confirmation,
      });
      console.log(res);
      props.setIsSignupVisible(false);
      swal({
        position: "center",
        icon: "success",
        title: "Successfully Signed up",
        timer: 1000,
      });
      props.setIsLoginVisible(true);
    } catch (error) {
      setErrName(error.response.data.errors.name);
      setErrEmail(error.response.data.errors.email);
      setErrPhone_no(error.response.data.errors.phone_no);
      setErrPassword(error.response.data.errors.password);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sign Up
      </Button>
      <Modal
        title="Sign Up"
        visible={props.isSignupVisible}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <form className="form" onSubmit={registerUser}>
          <div className="form-err">{errName}</div>
          <input
            type="text"
            name="name"
            placeholder=" Enter Name"
            className="form-input"
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
          />
          <div className="form-err">{errEmail}</div>
          <input
            type="email"
            name="email"
            placeholder=" Enter Email"
            className="form-input"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <div className="form-err">{errPhone_no}</div>
          <input
            type="tel"
            name="phone_no"
            placeholder=" Enter Phone Number"
            className="form-input"
            value={registerPhone_no}
            onChange={(e) => setRegisterPhone_no(e.target.value)}
          />
          <div className="form-err">{errPassword}</div>
          <input
            type="password"
            name="password"
            placeholder=" Enter Password"
            className="form-input"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <div className="form-err">{errPassword}</div>
          <input
            type="password"
            name="confirm-password"
            placeholder=" Confirm Password"
            className="form-input"
            value={registerPassword_confirmation}
            onChange={(e) => setRegisterPassword_confirmation(e.target.value)}
          />
          <button type="submit" className="form-btn">
            Sign Up
          </button>
        </form>
        <div className="form">
          Already have account?{" "}
          <button className="switch-btn" onClick={handleModol}>
            Login
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModelSignup;
