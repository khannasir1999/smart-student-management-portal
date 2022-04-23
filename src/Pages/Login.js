import "./Login.css";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error: "",
    validation_errors: [],
  });
  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };
  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios
      .post(`http://localhost:8000/api/admin_login`, data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("auth_user", res.data.user);
          localStorage.setItem("auth_token", res.data.token);
          swal("succsess", "Success", "success");
          navigate("/home/dashboard");
        }
      })
      .catch((err) => {
        setLogin({
          ...loginInput,
          error: "The provided credentials are incorrect.",
        });
      });
  };

  return (
    <div className="signin_form">
      <form onSubmit={loginSubmit} className="login_form">
        <h1>Signin form</h1>
        <input
          type="email"
          name="email"
          placeholder="enter email"
          onChange={handleInput}
          value={loginInput.email}
          className="email_input"
        />
        <p>Email</p>
        <span>{loginInput.validation_errors?.email}</span>

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleInput}
          value={loginInput.password}
          className="password"
        />
        <p>password</p>
        <span>{loginInput.validation_errors?.password}</span>

        <button type="submit">Login</button>

        <p>{loginInput.error}</p>
      </form>
    </div>
  );
}
export default Login;
