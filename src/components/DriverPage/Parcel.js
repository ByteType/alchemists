import React, { useState, useEffect } from "react";
import { apiEndpoints } from "../../config/ApiEndpoints";
import { useAuth } from "../../contexts/AuthContext";
//import styles from "./Parcel.module.css";

export default function Parcel({ location, onClick }) {
  const [parcels, setParcels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useAuth();

  useEffect(() => {
    const headers = { Authorization: `Bearer ${user.token}` };

    fetch(`${apiEndpoints.DRIVER_SEARCH}?location=${location}`, { headers })
      .then(response => {
        if (!response.ok) setError(`HTTP error! Status: ${response.status}`);
        return response.json();
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
    <div>
      {parcels.length > 0 ? (
        parcels.map(parcel => (
          <div key={parcel.id}>
            <div>Parcel ID: {parcel.id}</div>
            {/* Add more parcel details here */}
            <button onClick={() => onClick(parcel.id)}>Action</button>
          </div>
        ))
      ) : (
        <div>No parcels found for this location.</div>
      )}
    </div>
  );
}
