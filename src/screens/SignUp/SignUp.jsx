import React, { useState } from "react";
import "./signup.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockIcon from "@mui/icons-material/Lock";
import login from "./login.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <div className="signup">
      <div className="group-wrapper">
        <div className="group">
          <img className="img" alt="Login" src={login} />
        </div>
        <div className="overlap">
          <form onSubmit={handleSubmit}>
            <div className="div">
              <div className="text-wrapper-2">Signin</div>
              <div className="group-2">
                <AccountCircleOutlinedIcon
                  sx={{ position: "relative", top: "75%", left: "-44%" }}
                  className="icon"
                />
                <input
                  className="inp1"
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
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
                  placeholder="Enter your Password"
                  type="password"
                  name="password"
                  value={formData.password}
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
                  placeholder="Enter your Email"
                  type="email"
                  name="email"
                  value={formData.email}
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
                  placeholder="Enter your Number"
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-wrapper-5">
                Already have an account?
                <span className="signin">signin</span>
              </div>
              <button className="btn1" type="submit">
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
