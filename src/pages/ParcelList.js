import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/UserPage/Sidebar";
import ParcelCard from "../components/UserPage/ParcelCard";
import { useAuth } from "../contexts/AuthContext";
import "./ParcelList.css";

export default function ParcelList() {
  const user = useAuth();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="list-container">
        <div className="leftside-box">
          <Sidebar user={user} />
        </div>
        <div className="rightside-box">
          <ParcelCard user={user} />
        </div>
      </div>
    </>
  );
}
