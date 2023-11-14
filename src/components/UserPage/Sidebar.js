import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar-contaier">
        <div className="sidebar-box">
          <ul>
            <li className="sidebar-items user-info">username</li>
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
            <li className="sidebar-items sidebar-btn">Log out</li>
            <li className="sidebar-items sidebar-btn">Delete account</li>
          </ul>
        </div>
      </div>
    </>
  );
}
