import "./FrontScreen.css";
import ModelSignup from "../Components/ModelSignup";
import ModelLogin from "../Components/ModelLogin";

const FrontScreen = () => {
  return (
    
    <div className="head">
      <div className="nav-bar">
        <div className="heading">
          <h1>Stanford University</h1>
        </div>
        <ul>
          <li>
            <ModelLogin />
          </li>
          <li>
            <ModelSignup />
          </li>
        </ul>
      </div>
      <div class="overlay">
        <div class="sheading">
          EMPOWERING THE LEADERS OF THE FUTURE
          <div class="lheading">
            We aim to inspire, innovate and educate; to engage curiosity and 
            challenge you <br /> to excel academically, personally and professionally.
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrontScreen;
