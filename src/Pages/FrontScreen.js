import "./Pages_Styles/FrontScreen.css";
import ModelSignup from "../Components/ModelSignup";
import ModelLogin from "../Components/ModelLogin";
import { useState } from "react";

const FrontScreen = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  return (
    <div className="head">
      <div className="nav-bar">
        <div className="heading">
          <h1>Stanford University</h1>
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
          <li>
            <ModelSignup  
              isLoginVisible={isLoginVisible}
              setIsLoginVisible={setIsLoginVisible}
              isSignupVisible={isSignupVisible}
              setIsSignupVisible={setIsSignupVisible} />
          </li>
        </ul>
      </div>
      <div class="overlay">
        <div class="sheading">
          EMPOWERING THE LEADERS OF THE FUTURE
          <div class="lheading">
            We aim to inspire, innovate and educate; to engage curiosity and
            challenge you <br /> to excel academically, personally and
            professionally.
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrontScreen;
