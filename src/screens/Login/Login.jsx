import React, { useState } from "react";
import "./login.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockIcon from "@mui/icons-material/Lock";
import login from "./login.png";

export const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailOrPhoneChange = (e) => {
    setEmailOrPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email/Phone:", emailOrPhone);
    console.log("Password:", password);
  };

  return (
    <div className="login">
      <div className="group-wrapper">
        <div className="group">
          <img className="img" alt="Login" src={login} />
        </div>
        <div className="overlap">
          <form onSubmit={handleSubmit}>
            <div className="div">
              <div className="div-wrapper">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="text-wrapper">Signin</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-2">Signin</div>
              <div className="group-2">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <AccountCircleOutlinedIcon
                      sx={{ position: "relative", top: "75%", left: "-44%" }}
                      className="icon"
                    />
                    <input
                      className="inp1"
                      type="text"
                      placeholder="Email/Phone Number"
                      value={emailOrPhone}
                      onChange={handleEmailOrPhoneChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="group-3">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <LockIcon
                      className="icon"
                      sx={{ position: "relative", top: "74%", left: "-45%" }}
                    />
                    <input
                      className="inp1"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
              </div>
              <p className="don-t-have-an">
                <span className="span">Don’t have an account? </span>
                <span className="text-wrapper-4">Signup</span>
              </p>
              <div className="text-wrapper-5">Forget your password?</div>
              <button className="btn1" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
