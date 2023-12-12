import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiEndpoints } from "../../config/ApiEndpoints";
import { useAuth, useAuthDispatch } from "../../contexts/AuthContext";

export default function Sidebar() {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const user = useAuth();

  async function logout() {
    try {
      const response = await fetch(apiEndpoints.SIGN_OUT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        dispatch({type: "logout"});
        navigate("/");
        alert("Logout success!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-contaier">
          <div className="sidebar-box">
            <ul>
              <li className="sidebar-items user-info">
                {user
                  ? user.username
                    ? user.username
                    : "username"
                  : "username"}
              </li>
              <li className="sidebar-items sidebar-btn">
                <Link to="/driver/lockers" className="li-link">
                  Lockers
                </Link>
              </li>
              <li className="sidebar-items sidebar-btn">
                <Link to="/driver/generate" className="li-link">
                  Generate
                </Link>
              </li>
              <li className="sidebar-items sidebar-btn" onClick={logout}>
                Log out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
