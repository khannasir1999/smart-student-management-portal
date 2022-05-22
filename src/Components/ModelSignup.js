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

  // code for post register data.........................................

  // states for registration user.........
  const [registerF_Name, setRegisterF_Name] = useState("");
  const [registerL_Name, setRegisterL_Name] = useState("");
  const [registerFatherName, setRegisterFatherName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone_no, setRegisterPhone_no] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPassword_confirmation, setRegisterPassword_confirmation] =
    useState("");
  const [registerAge, setRegisterAge] = useState("");
  const [registerGender, setRegisterGender] = useState("");
  const [registerPicture, setRegisterPicture] = useState("");
  const [role_name, setRole_Name] = useState("");

  //code for error handaling............
  const [errF_Name, setErrF_Name] = useState("");
  const [errL_Name, setErrL_Name] = useState("");
  const [errFather_Name, setErrFather_Name] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errAge, setErrAge] = useState("");
  const [errImage, setErrImage] = useState("");
  const [errPhone_no, setErrPhone_no] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errGender, setErrGender] = useState("");
  const [errRole_Name, setErrRole_Name] = useState("");

  useEffect(() => {
    if (props.isSignupVisible) {
      setRegisterEmail("");
      setRegisterFatherName("");
      setRegisterF_Name("");
      setRegisterL_Name("");
      setRegisterGender("");
      setRegisterPassword("");
      setRegisterPassword_confirmation("");
      setRegisterAge("");
      setRegisterPhone_no("");
      setRegisterPicture("");
    }
  }, [props.isSignupVisible]);

  useEffect(() => {
    if (
      registerF_Name ||
      registerL_Name ||
      registerFatherName ||
      registerGender ||
      registerAge ||
      registerPicture ||
      role_name ||
      registerEmail ||
      registerPhone_no ||
      registerPassword ||
      registerPassword_confirmation
    ) {
      setErrF_Name("");
      setErrL_Name("");
      setErrFather_Name("");
      setErrAge("");
      setErrEmail("");
      setErrGender("");
      setErrImage("");
      setErrRole_Name("");
      setErrPassword("");
      setErrImage("");
      setErrPhone_no("");
    }
  }, [
    registerF_Name,
    registerL_Name,
    registerFatherName,
    registerGender,
    registerAge,
    registerPicture,
    role_name,
    registerEmail,
    registerPhone_no,
    registerPassword,
    registerPassword_confirmation,
  ]);

  // fucntion for registration of data...
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", registerPicture);
      formData.append("first_name", registerF_Name);
      formData.append("last_name", registerL_Name);
      formData.append("father_name", registerFatherName);
      formData.append("email", registerEmail);
      formData.append("phone_no", registerPhone_no);
      formData.append("password", registerPassword);
      formData.append("password_confirmation", registerPassword_confirmation);
      formData.append("gender", registerGender);
      formData.append("role_name", role_name);
      formData.append("age", registerAge);

      const res = await axios.post(
        "http://localhost:8000/api/register",
        formData
      );
      console.log(res);
      props.setIsSignupVisible(false);
      swal({
        position: "center",
        icon: "success",
        title: "Successfully Added",
        timer: 1000,
      });
    } catch (error) {
      setErrF_Name(error.response.data.errors.first_name);
      setErrL_Name(error.response.data.errors.last_name);
      setErrFather_Name(error.response.data.errors.father_name);
      setErrAge(error.response.data.errors.age);
      setErrGender(error.response.data.errors.gender);
      setErrEmail(error.response.data.errors.email);
      setErrPhone_no(error.response.data.errors.phone_no);
      setErrPassword(error.response.data.errors.password);
      setErrImage(error.response.data.errors.picture);
      setErrRole_Name(error.response.data.errors.role_name);
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          backgroundColor: " rgba(0,0,0,0.0)",
          color: "gray",
          border: "0px  rgba(0,0,0,0.0)",
        }}
      >
        Add New
      </Button>
      <Modal
        title="Add New"
        visible={props.isSignupVisible}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <form className="form" onSubmit={registerUser}>
          <div className="form-err">{errF_Name}</div>
          <input
            type="text"
            name="first_name"
            placeholder=" First Name"
            className="form-input"
            value={registerF_Name}
            onChange={(e) => setRegisterF_Name(e.target.value)}
          />
          <div className="form-err">{errL_Name}</div>
          <input
            type="text"
            name="last_name"
            placeholder=" Last Name"
            className="form-input"
            value={registerL_Name}
            onChange={(e) => setRegisterL_Name(e.target.value)}
          />
          <div className="form-err">{errFather_Name}</div>
          <input
            type="text"
            name="father_name"
            placeholder=" Father Name"
            className="form-input"
            value={registerFatherName}
            onChange={(e) => setRegisterFatherName(e.target.value)}
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
          <div className="form-err">{errAge}</div>
          <input
            type="number"
            name="age"
            placeholder=" Enter Your Age"
            className="form-input"
            value={registerAge}
            onChange={(e) => setRegisterAge(e.target.value)}
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

          <div className="form-err">{errGender}</div>

          <select
            name="Gender"
            className="form-input"
            onChange={(e) => setRegisterGender(e.target.value)}
          >
            <option value="none" selected disabled hidden>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <div className="form-err">{errRole_Name}</div>

          <select
            name="Signup Type"
            className="form-input"
            onChange={(e) => setRole_Name(e.target.value)}
          >
            <option value="none" selected disabled hidden>
              Profession
            </option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>
          <div className="form-err">{errImage}</div>
          <div>
         <label className="form-label">Profile Picture :</label>
          <input
            type="file"
            name="profile_photo"
            className="img"
            onChange={(e) => {
              setRegisterPicture(e.target.files[0]);
            }}
          />
        </div>
          <button type="submit" className="form-btn" onClick={registerUser}>
            Add New
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ModelSignup;
