import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { BsTruck, BsBoxSeam } from "react-icons/bs";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const [Menu, setMenu] = useState(false);
  const user = useAuth();

  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <BsBoxSeam size={36} data-testid="bsboxseam-icon" />
        </div>
        <ul
          className={Menu ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMenu(false)}
        >
          <li>
            <Link to="/" className="li-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/login" className="li-link">
              LOGIN
            </Link>
          </li>
          {(user?.roles ?? []).includes("ROLE_USER") ?
            <li>
              <Link to="/user/list">
                <AiOutlineUser
                  data-testid="user-icon"
                  size={20}
                  style={{color: "black", verticalAlign: "middle"}}
                />
              </Link>
            </li>
            : null}
          {(user?.roles ?? []).includes("ROLE_DRIVER") ?
            <li>
              <Link to="/driver/lockers">
                <BsTruck
                  data-testid="truck-icon"
                  size={20}
                  style={{color: "black", verticalAlign: "middle"}}
                />
              </Link>
            </li>
          : null}
        </ul>

        <button className="menu-icon" onClick={() => setMenu(!Menu)}>
          {Menu ? <AiOutlineClose /> : <AiOutlineBars />}
        </button>
      </nav>
    </header>
  );
}
