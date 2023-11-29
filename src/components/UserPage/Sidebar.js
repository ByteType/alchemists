import { useNavigate, Link } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar({ user }) {
  const navigate = useNavigate();

  async function logout() {
    try {
      const response = await fetch(
        "https://bytetype-cea685bb8e38.herokuapp.com/api/auth/signout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);

        localStorage.removeItem("token");
        localStorage.removeItem("authenticated");
        navigate("/alchemists");
        alert("Logout success!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function deleteUser() {
    fetch(`https://bytetype-cea685bb8e38.herokuapp.com/api/auth/${user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("authenticated");
          navigate("/alchemists");
          alert("User account removed successfully");
        } else {
          alert("User account removal failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div className="sidebar-contaier">
        <div className="sidebar-box">
          <ul>
            <li className="sidebar-items user-info">
              {user ? (user.username ? user.username : "username") : "username"}
            </li>
            <li className="sidebar-items sidebar-btn">
              <Link to="/alchemists/user/delivery" className="li-link">
                Delivery parcel
              </Link>
            </li>
            <li className="sidebar-items sidebar-btn">
              <Link to="/alchemists/user/list" className="li-link">
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
    </>
  );
}
