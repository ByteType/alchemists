import React, { useState } from "react";
import { apiEndpoints } from "../config/ApiEndpoints";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/DriverPage/Sidebar";
import styles from "./Generate.module.css";

export default function Generate() {
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");
  const user = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(apiEndpoints.DRIVER_LOCKER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({ location, size: parseInt(size, 10) }),
      });

      if (response.ok) {
        setMessage("Locker created successfully!");
      } else {
        console.log(await response.json());
      }
    } catch (error) {
      setMessage("Error creating locker: " + error.message);
    }
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="form-container">
        <div className="leftside-box">
          <Sidebar />
        </div>
        <div className="rightside-box">
          <form onSubmit={handleSubmit}>
            <div className={styles.formData}>
              <label htmlFor="location">Location:</label>
              <input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className={styles.formData}>
              <label htmlFor="size">Size:</label>
              <input
                id="size"
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <button className={styles.submit} type="submit">Create Locker</button>
          </form>
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
    </>
  );
}
