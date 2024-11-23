import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";

import "../loginStyle.css";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = AuthData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/account");
    } catch (error) {
      setErrorMessage(error);
    }
  };
  return (
    <div className="bodyStyle">
      <div className="myContainer" id="myContainer">
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <span>Use your email and password</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <a href="wwww">Forget Your Password?</a>
            <button onClick={handleLogin}>Sign In</button>
          </form>
          {errorMessage ? <div className="">{errorMessage}</div> : null}
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <h1>Car ShowRoom </h1>
              <p>
                Register with your personal details to use all of site features
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
