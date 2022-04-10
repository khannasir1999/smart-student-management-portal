import "./Login.css"
import { Outlet, Link } from "react-router-dom";
const Login = () => {

  


  return (
    <div className="signin_form">

      <form>
        <h1>Signin form</h1>
        <input type="email" placeholder="enter email" className="email_input" />
        <p>Email</p>

        <input type="password" placeholder="password" className="password" />
        <p>password</p>

        <Link to="/Dashboard">
          <button>Login</button>
        </Link>
        </form>
      <Outlet/>
    </div>
    
    

  );
};
export default Login;
