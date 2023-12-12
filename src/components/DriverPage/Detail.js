import React, { useEffect, useState } from "react";
import { CabinetState } from "../../enum/CabinetState";
import { apiEndpoints } from "../../config/ApiEndpoints";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Detail.module.css";

export default function Detail({ id, status, onClick }) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const user = useAuth();

  useEffect(() => {
    const headers = { Authorization: `Bearer ${user.token}` };

    fetch(`${apiEndpoints.DRIVER_CABINET}/${id}`, { headers })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          setError(`HTTP error! Status: ${response.status}`);
          return null;
        }
      })
      .then(data => setDetails(data))
      .catch(error => console.error('Error fetching cabinet detail:', error));
  }, [id, user]);

  if (!!error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return !!details && (
    <div className={styles.detailContainer}>
      <h2>Cabinet Details</h2>
      <div><strong>ID:</strong> {details.id}</div>
      <div><strong>Type:</strong> {details.type}</div>
      <div><strong>Parcel ID:</strong> {details.parcel?.id}</div>
      <div><strong>Sender:</strong> {details.parcel?.sender?.username}</div>
      <div><strong>Recipient:</strong> {details.parcel?.recipient?.username}</div>
      <div><strong>Status:</strong> {details.parcel?.status}</div>

      {status === CabinetState.DISTRIBUTE_PARCEL_EXIST &&
        <button className={styles.button} onClick={() => onClick(details.parcel?.id)}>Distribute Parcel</button>}
    </div>
  );
}
