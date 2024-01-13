import React, { useState } from "react";
import "./reset.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockIcon from "@mui/icons-material/Lock";
import reset from "./Forgot.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

export const ResetPassword = () => {
  const [ResetData, setResetData] = useState({
    otp: "",
    email: "",
    newpassword: "",
    confirmpassword: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ResetData.newpassword !== ResetData.confirmpassword) {
      setPasswordMatchError(true);
      return;
    }

    console.log("Reset Data:", ResetData);
    setResetData({
      otp: "",
      email: "",
      newpassword: "",
      confirmpassword: "",
    });

    setPasswordMatchError(false);
  };

  return (
    <div className="reset">
      <div className="group-wrapper">
        <div className="group">
          <img className="img" alt="Login" src={reset} />
        </div>
        <div className="overlap">
          <form onSubmit={handleSubmit}>
            <div className="div">
              <div className="text-wrapper-2">Reset my Password</div>
              <p>Hey enter your details to reset your password</p>
              <div className="group-2">
                <AccountCircleOutlinedIcon
                  sx={{ position: "relative", top: "75%", left: "-44%" }}
                  className="icon"
                />
                <input
                  className="inp1"
                  type="email"
                  placeholder="Enter Your Phone/Email"
                  name="email"
                  value={ResetData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="overlap-group-3">
                <LockIcon
                  className="icon"
                  sx={{ position: "relative", top: "74%", left: "-45%" }}
                />
                <input
                  className="inp1"
                  placeholder="Confirm your Password"
                  type="password"
                  name="confirmpassword"
                  value={ResetData.confirmpassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="overlap-group-4">
                <MailOutlineIcon
                  className="icon"
                  sx={{ position: "relative", top: "74%", left: "-45%" }}
                />
                <input
                  className="inp1"
                  placeholder="Enter your new Password"
                  type="password"
                  name="newpassword"
                  value={ResetData.newpassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="overlap-group-5">
                <PhoneIphoneIcon
                  className="icon"
                  sx={{ position: "relative", top: "74%", left: "-45%" }}
                />
                <input
                  className="inp1"
                  placeholder="Enter your OTP"
                  type="number"
                  name="otp"
                  value={ResetData.otp}
                  onChange={handleChange}
                  required
                />
              </div>
              {passwordMatchError && (
                <p className="error-message">Passwords do not match!</p>
              )}
              <button className="btn1" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
