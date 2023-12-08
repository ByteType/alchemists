import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineUser, AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { BsTruck, BsBoxSeam } from "react-icons/bs";

export default function Navbar() {
  const [Menu, setMenu] = useState(false);
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
            <Link to="/alchemists" className="li-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/alchemists/login" className="li-link">
              LOGIN
            </Link>
          </li>
          <li>
            <Link to="/alchemists/user/list">
              <AiOutlineUser
                data-testid="user-icon"
                size={20}
                style={{ color: "black", verticalAlign: "middle" }}
              />
            </Link>
          </li>
          <li>
            <Link to="/alchemists/driver">
              <BsTruck
                data-testid="truck-icon"
                size={20}
                style={{ color: "black", verticalAlign: "middle" }}
              />
            </Link>
          </li>
        </ul>

        <button className="menu-icon" onClick={() => setMenu(!Menu)}>
          {Menu ? <AiOutlineClose /> : <AiOutlineBars />}
        </button>
      </nav>
    </header>
  );
}
