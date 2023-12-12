import React, { useState, useEffect } from "react";
import { apiEndpoints } from "../../config/ApiEndpoints";
import styles from "./Locker.module.css";

export default function Locker({ onSelect }) {
  const [lockers, setLockers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${apiEndpoints.DRIVER_LOCKER}/all`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          setError(`HTTP error! Status: ${response.status}`);
          return [];
        }

      })
      .then(data => setLockers(data))
      .catch(error => console.error('There was an error fetching the lockers!', error))
      .finally(() => setIsLoading(false));
  }, []);

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
    <div className={styles.lockerContainer}>
      {lockers.length > 0 ? (
          lockers.map(locker => (
          <div
            key={locker.id}
            className={styles.locker}
            onClick={() => onSelect(locker.id, locker.location)}
          >
            {locker.location}
          </div>
        ))
      ) : (
        <div>No lockers found.</div>
      )}
    </div>
  );
}
