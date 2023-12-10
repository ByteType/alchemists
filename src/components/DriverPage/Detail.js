import React, { useEffect, useState } from "react";
import { apiEndpoints } from "../../config/ApiEndpoints";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Detail.module.css";

export default function Detail({ id }) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const user = useAuth();

  useEffect(() => {
    const headers = { Authorization: `Bearer ${user.token}` };

    fetch(`${apiEndpoints.DRIVER_CABINET}/${id}`, { headers })
      .then(response => {
        if (!response.ok) setError(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then(data => setDetails(data))
      .catch(error => console.error('Error fetching cabinet detail:', error));
  }, [id, user]);

  if (!!error) {
    return <div className="error">Error: {error}</div>;
  }

  return !!details && (
    <div className={styles.detailContainer}>
      <h2>Cabinet Details</h2>
      <div><strong>ID:</strong> {details.id}</div>
      <div><strong>Type:</strong> {details.type}</div>
      <div><strong>Parcel ID:</strong> {details.parcelId}</div>
      <div><strong>Sender:</strong> {details.sender.username}</div>
      <div><strong>Recipient:</strong> {details.recipient.username}</div>
      <div><strong>Dimensions:</strong> {`${details.width} x ${details.height} x ${details.depth}`}</div>
      <div><strong>Mass:</strong> {details.mass}</div>
      <div><strong>Status:</strong> {details.status}</div>
      <div><strong>Ready For Pickup At:</strong> {details.readyForPickupAt}</div>
      <div><strong>Picked Up At:</strong> {details.pickedUpAt}</div>
      <div><strong>Pickup Code:</strong> {details.pickupCode}</div>
      <div><strong>Delivery Code:</strong> {details.deliveryCode}</div>
    </div>
  );
}