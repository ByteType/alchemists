import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiEndpoints } from "../../config/ApiEndpoints";
import { useAuth, useAuthDispatch } from "../../contexts/AuthContext";
import "./Sidebar.css";

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
        }
      });

      if (response.ok) {
        dispatch({ type: "logout" });
        navigate("/alchemists");
        alert("Logout success!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function deleteUser() {
    try {
      const response = await fetch(`${apiEndpoints.DELETE_ACCOUNT}/auth/${user.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        dispatch({ type: "logout" });
        navigate("/alchemists");
        alert("User account removed successfully");
        window.location.reload();
      } else {
        alert("User account removal failed");
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
                <Link to="/user/delivery" className="li-link">
                  Delivery parcel
                </Link>
              </li>
              <li className="sidebar-items sidebar-btn">
                <Link to="/user/list" className="li-link">
                  Parcel list
                </Link>
              </li>

              <li className="sidebar-items sidebar-btn" onClick={logout}>
                Log out
              </li>

              <li className="sidebar-items sidebar-btn" onClick={deleteUser}>
                Delete account
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
