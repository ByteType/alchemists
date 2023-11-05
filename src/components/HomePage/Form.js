import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineHome,
} from "react-icons/ai";
import "./Form.css";

export default function Form() {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form>
        <div className="inputs">
          <div className="input">
            <AiOutlineUser className="form-icon" />
            <input type="text" placeholder="Username" />
          </div>
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <AiOutlineMail className="form-icon" />
              <input type="email" placeholder="Email" />
            </div>
          )}

          <div className="input">
            <AiOutlineLock className="form-icon" />
            <input type="password" placeholder="Password" />
          </div>
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <AiOutlineHome className="form-icon" />
              <input type="text" placeholder="Address" />
            </div>
          )}
        </div>

        <div className="switch-btn">
          {action === "Sign Up"
            ? "Already have an account? "
            : "Not registered yet? "}
          {action === "Sign Up" ? (
            <span
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </span>
          ) : (
            <span
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </span>
          )}
        </div>
        <div className="btn-container">
          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
