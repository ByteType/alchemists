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
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (action === "Sign Up") {
      try {
        const response = await fetch(
          "https://bytetype-cea685bb8e38.herokuapp.com/api/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
        if (response.ok) {
          const result = await response.json();

          setMessage("Signup successful!");
        } else {
          setMessage("Signup failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (action === "Login") {
      try {
        const response = await fetch(
          "https://bytetype-cea685bb8e38.herokuapp.com/api/auth/signin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: userData.username,
              password: userData.password,
            }),
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          console.log("response.headers =", response.headers.get("Set-Cookie"));
          setMessage("Login successful!");
        } else {
          setMessage("Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
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
          {action === "Login" ? (
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
          {action === "Login" ? (
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
          {action === "Sign Up"
            ? "Already have an account? "
            : "Not registered yet? "}
          {action === "Sign Up" ? (
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
