import "./Login.css";
import { Outlet, Link } from "react-router-dom";
const Login = () => {

  
  return (
    <div className="signin_form">

      <form onSubmit={submitHandler}>
        <h1>Signin form</h1>
        <input type="email" placeholder="enter email" className="email_input"/> 
        <p>Email</p>
        
      <input type="password" placeholder="password" className="password"/>
        <p>password</p>

        <Link to="/Dashboard">

<button type="submit" >Signin</button>

        </Link>
      </form>
    
    </div>
  );
};
export default Login;

