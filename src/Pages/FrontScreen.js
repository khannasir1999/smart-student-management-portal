import "./Pages_Styles/FrontScreen.css";
import ModelSignup from "../Components/ModelSignup";
import ModelLogin from "../Components/ModelLogin";
import { useState } from "react";

const FrontScreen = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  return (
  <div className="head">
    <div className="over-lay">
      <div className="nav-bar">
        <div className="heading">
          <h1 className="heading-text">COMSATS UNIVERSITY</h1>
        </div>
        <ul>
          <li>
            <ModelLogin
              isLoginVisible={isLoginVisible}
              setIsLoginVisible={setIsLoginVisible}
              isSignupVisible={isSignupVisible}
              setIsSignupVisible={setIsSignupVisible}
            />
          </li>
        </ul>
      </div>
      <div className="overlay">
        <div className="sheading">
          EMPOWERING THE LEADERS OF THE FUTURE
          <div className="lheading">
            We aim to inspire, innovate and educate; to engage curiosity and
            challenge you <br /> to excel academically, personally and
            professionally.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default FrontScreen;
