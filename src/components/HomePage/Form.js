import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineHome,
} from "react-icons/ai";
import "./Form.css";
import { useAuthDispatch } from "../../contexts/AuthContext";
import { ActionTypes } from "../../enum/ActionType";
import { apiEndpoints } from "../../config/ApiEndpoints";

export default function Form() {
  const [action, setAction] = useState(ActionTypes.SIGN_UP);
  const [message, setMessage] = useState("");
  const dispatch = useAuthDispatch();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    role: ["user"],
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint =
      action === ActionTypes.SIGN_UP
        ? apiEndpoints.SIGN_UP
        : apiEndpoints.LOGIN;
    const data =
      action === ActionTypes.SIGN_UP
        ? userData
        : { username: userData.username, password: userData.password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) console.log(response.message);

      const result = await response.json();
      dispatch({ type: "login", payload: result });
      localStorage.setItem("token", result.token);
      localStorage.setItem("authenticated", true);
      setMessage(`${action} successful!`);
    } catch (error) {
      console.error("Error:", error);
      setMessage(`${action} failed: ${error.message}`);
    }
  };
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      {message ? <div className="message">{message}</div> : <div></div>}
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <AiOutlineUser className="form-icon" />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </div>
          {action === ActionTypes.LOGIN ? (
            <div></div>
          ) : (
            <div className="input">
              <AiOutlineMail className="form-icon" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="input">
            <AiOutlineLock className="form-icon" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>
          {action === ActionTypes.LOGIN ? (
            <div></div>
          ) : (
            <div className="input">
              <AiOutlineHome className="form-icon" />
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={userData.address}
                onChange={handleChange}
                required
              />
            </div>
          )}
        </div>

        <div className="switch-btn">
          {action === ActionTypes.SIGN_UP
            ? "Already have an account? "
            : "Not registered yet? "}
          {action === ActionTypes.SIGN_UP ? (
            <span
              onClick={() => {
                setAction("Login");
                setMessage("");
              }}
            >
              Login
            </span>
          ) : (
            <span
              onClick={() => {
                setAction("Sign Up");
                setMessage("");
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
