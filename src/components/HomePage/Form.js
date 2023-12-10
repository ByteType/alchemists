import React, {useState} from "react";
import {AiOutlineHome, AiOutlineLock, AiOutlineMail, AiOutlineUser} from "react-icons/ai";
import {ActionTypes} from "../../enum/ActionType";
import {apiEndpoints} from "../../config/ApiEndpoints";
import {useAuthDispatch} from "../../contexts/AuthContext";
import "./Form.css";

export default function Form() {
  const [action, setAction] = useState(ActionTypes.LOGIN);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState({ role: ["user"] });
  const dispatch = useAuthDispatch();

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const endpoint =
      action === ActionTypes.SIGN_UP
        ? apiEndpoints.SIGN_UP
        : apiEndpoints.SIGN_IN;
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
      setMessage(`${action} successful!`);
    } catch (error) {
      console.error("Error:", error);
      setMessage(`${action} failed: ${error.message}`);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      {!!message && <div className="message">{message}</div>}
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
          {action === ActionTypes.SIGN_UP && (
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
          {action === ActionTypes.SIGN_UP && (
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
              data-testid="toLoginButton"
              onClick={() => {
                setAction(ActionTypes.LOGIN);
                setMessage("");
              }}
            >
              Login
            </span>
          ) : (
            <span
              data-testid="toSignUpButton"
              onClick={() => {
                setAction(ActionTypes.SIGN_UP);
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
