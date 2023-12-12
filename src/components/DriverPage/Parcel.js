import React, { useState, useEffect } from "react";
import { apiEndpoints } from "../../config/ApiEndpoints";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Parcel.module.css";

export default function Parcel({ location, onClick }) {
  const [parcels, setParcels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useAuth();

  useEffect(() => {
    const headers = { Authorization: `Bearer ${user.token}` };

    fetch(`${apiEndpoints.DRIVER_SEARCH}?location=${location}`, { headers })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          setError(`HTTP error! Status: ${response.status}`);
          return [];
        }
      })
      .then(data => setParcels(data))
      .catch(error => console.error('There was an error fetching the parcels!', error))
      .finally(() => setIsLoading(false));
  }, [location, user]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading-animation"></div>
        Loading...
      </div>
    );
  }

  if (!!error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      {parcels.length > 0 ? (
        parcels.map(parcel => (
          <div key={parcel.id} className={styles.card}>
            <div className={styles.section}>Parcel ID: {parcel.id}</div>
            <div className={styles.section}>
              <h3>Sender</h3>
              <p>Username: {parcel.sender.username}</p>
              <p>Address: {parcel.sender.address}</p>
            </div>
            <div className={styles.section}>
              <h3>Recipient</h3>
              <p>Username: {parcel.recipient.username}</p>
              <p>Address: {parcel.recipient.address}</p>
            </div>
            <div className={styles.section}>Status: {parcel.status}</div>
            <button className={styles.button} onClick={() => onClick(parcel.id)}>Arrive</button>
          </div>
        ))
      ) : (
        <div>No required parcels found for this location.</div>
      )}
    </div>
  );
}
