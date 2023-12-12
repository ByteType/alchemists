import React from "react";
import styles from "./Cabinet.module.css";

export default function Cabinet({ cabinets, onSelect }) {
  // const [cabinets, setCabinets] = useState([]);
  // const [error, setError] = useState(null);
  //
  // useEffect(() => {
  //   fetch(`${apiEndpoints.DRIVER_LOCKER}/${id}`)
  //     .then(response => {
  //       if (!response.ok) setError(`HTTP error! Status: ${response.status}`);
  //       return response.json();
  //     })
  //     .then(data => setCabinets(data.cabinets))
  //     .catch(error => console.error('Error fetching locker data:', error));
  // }, [id]);
  //
  // if (!!error) {
  //   return <div className="error">Error: {error}</div>;
  // }

  return (
    <div className={styles.cabinetContainer}>
      {cabinets?.map(cabinet => (
        <div
          key={cabinet.id}
          className={`${styles.cabinet} ${cabinet.type === "OPEN" ? styles.exist : styles.empty }`}
          onClick={() => onSelect(cabinet.id, cabinet.type)}
        >
          Cabinet ID: {cabinet.id} - {cabinet.type}
        </div>
      ))}
    </div>
  )
}
