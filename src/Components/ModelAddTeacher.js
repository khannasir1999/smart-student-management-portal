import { Modal, Button } from "antd";
import "./Components_Styles/Model.css";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const ModelAddTeacher = (props) => {
  // code of model visibility..........................................
  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.title === "create") {
      registerUser()
    } else {
      props.editTeacher()
    }
  }

  const showModal = () => {
    props.setIsSignupVisible(true);
    props.setTitle("create")
  };
  const handleCancel = () => {
    props.setIsSignupVisible(false);
  };


  // code for post register data.........................................

  // states for registration user.........
  // const [registerName, setRegisterName] = useState("");
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPhone_no, setRegisterPhone_no] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [registerPassword_confirmation, setRegisterPassword_confirmation] =
  //   useState("");

  //code for error handaling............
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone_no, setErrPhone_no] = useState("");
  const [errPassword, setErrPassword] = useState("");

  useEffect(() => {
    if (
      props.registerName ||
      props.registerEmail ||
      props.registerPhone_no ||
      props.registerPassword ||
      props.registerPassword_confirmation
    ) {
      setErrName("");
      setErrEmail("");
      setErrPassword("");
      setErrPhone_no("");
    }
  }, [
    props.registerName,
    props.registerEmail,
    props.registerPassword,
    props.registerPassword_confirmation,
    props.registerPhone_no,
  ]);

  // fucntion for registration of data...
  const registerUser = async () => {

    try {
      const res = await axios.post("http://localhost:8000/api/teachers", {
        name: props.registerName,
        email: props.registerEmail,
        phone_no: props.registerPhone_no,
        password: props.registerPassword,
        password_confirmation: props.registerPassword_confirmation,
      });
      props.getTeacher()
      console.log(res);
      props.setIsSignupVisible(false);
      swal({
        position: "center",
        icon: "success",
        title: "Teacher Added",
        timer: 1500,
      });

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
        + Add
      </Button>
      <Modal
        title={props.title === "create" ? "Add Teacher" : "Edit Data"}
        visible={props.isSignupVisible}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-err">{errName}</div>
          <input
            type="text"
            name="name"
            placeholder=" Enter Name"
            className="form-input"
            value={props.registerName}
            onChange={(e) => props.setRegisterName(e.target.value)}
          />
          <div className="form-err">{errEmail}</div>
          <input
            type="email"
            name="email"
            placeholder=" Enter Email"
            className="form-input"
            value={props.registerEmail}
            onChange={(e) => props.setRegisterEmail(e.target.value)}
          />
          <div className="form-err">{errPhone_no}</div>
          <input
            type="tel"
            name="phone_no"
            placeholder=" Enter Phone Number"
            className="form-input"
            value={props.registerPhone_no}
            onChange={(e) => props.setRegisterPhone_no(e.target.value)}
          />
          <div className="form-err">{errPassword}</div>
          <input
            type="password"
            name="password"
            placeholder=" Enter Password"
            className="form-input"
            value={props.registerPassword}
            onChange={(e) => props.setRegisterPassword(e.target.value)}
          />
          <div className="form-err">{errPassword}</div>
          <input
            type="password"
            name="confirm-password"
            placeholder=" Confirm Password"
            className="form-input"
            value={props.registerPassword_confirmation}
            onChange={(e) => props.setRegisterPassword_confirmation(e.target.value)}
          />
          <button type="submit" className="form-btn">
            Add
          </button>
        </form>

      </Modal>
    </>
  );
};

export default ModelAddTeacher;