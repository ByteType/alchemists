import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/UserPage/Sidebar";
import ParcelCard from "../components/UserPage/ParcelCard";

import "./ParcelList.css";

export default function ParcelList() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="list-container">
        <div className="leftside-box">
          <Sidebar />
        </div>
        <div className="rightside-box">
          <ParcelCard />
        </div>
      </div>
    </>
  );
}
