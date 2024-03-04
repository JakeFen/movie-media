import { useState } from "react";
import "./sign-in.styles.scss";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/sign-up";
import Splash from "../../assets/sign-in-splash.jpg";

function SignIn() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={Splash} alt="slash image" />
        <div className="gradient-bottom"></div>
      </div>

      <div>
        {showLoginForm ? (
          <Login toggleForm={toggleForm} />
        ) : (
          <SignUp toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default SignIn;
