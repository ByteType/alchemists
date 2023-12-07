import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/UserPage/Sidebar";
import ParcelCard from "../components/UserPage/ParcelCard";
import "./ParcelList.css";

export default function ParcelList() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    const isUserAuthenticated = loggedInUser === "true";

    if (!isUserAuthenticated) {
      navigate("/alchemists/login");
    }
  }, [navigate]);

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
