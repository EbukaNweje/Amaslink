import React, { useState } from "react";
import "./SignUp.css";
import "./SignUpMobile.css";
import { FcGoogle } from "react-icons/fc";
import { IoMdEyeOff } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [change, setChange] = useState(true);
  const nav= useNavigate()
  const handleChange = () => {
    setChange(!change);
    console.log("sss");
  };
  return (
    <div className="SignUpContainer">
      <div className="signUpImage">
        <div className="logo" onClick={()=>nav('/')}></div>
        <div className="logoText">
          <div className="Signuprapper">
            <p style={{ color: "white" }}>Enjoy the best Experience</p>
            <p style={{ color: "red" }}>AMALINK.COM</p>
          </div>
        </div>
      </div>

      <div className="signUpDetails">
        <div className="SignUpCreateAccount">
          <h3>Create Account</h3>
        </div>

        <main className="SignUpGoogle">
          <button className="SignupwithGoogle">
            <p className="SignUppTag">Sign up with Google</p>

            <FcGoogle className="SignUpGoogleIcon" />
          </button>

          <div className="SignUpOptiontag">
            <div className="line"></div>

            <h4 className="SignUpOr">or</h4>

            <div className="line"></div>
          </div>
        </main>

        <main className="SignUpMain2">
          <input
            type="text"
            placeholder="Full Name"
            className="SignUpinputtag1"
          />

          <input
            type="text"
            placeholder="Email Address"
            className="SignUpinputtag2"
          />

          <div className="SignUpinputtag3">
            <input
              type="text"
              placeholder="Password"
              className="SignUpinputtag3Inner"
            />
            <IoMdEyeOff className="SignUppasswordEYE" />
          </div>

          {change ? (
            <div className="SignUpmain3">
              <input
                type="text"
                placeholder="Number"
                className="SignUpInputTagNumber"
              />
              <input
                type="text"
                placeholder="Address"
                className="SignUpInputTagAddress"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="SignUpInputTagCompanyName"
              />
              <input
                type="text"
                placeholder="Company Registration Number"
                className="SignUpInputTagCompanyRegistrationNumber"
              />
            </div>
          ) : null}
        </main>

        <div className="SignUpTick">
          <span className="SignupSpan" onClick={handleChange}>
          {change ? <FaCircleCheck className="CircleImage" style={{ color: 'red', fontSize: "20px" }} /> : <CiCircleCheck className="CircleImage" style={{ color: 'red', fontSize: "20px" }} />}
          </span>

          <p style={{ fontSize: "12px" }}>Tick to become Ventor</p>
        </div>

        <div className="SignUpButtonContainer">
          <button className="SignUpButton">Create Account</button>
          <h5 className="SignUph5">
            Already have an account?{" "}
            <span style={{ color: "#C90A12", cursor: "pointer" }} onClick={() => nav('/login')}>Login</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Signup;
