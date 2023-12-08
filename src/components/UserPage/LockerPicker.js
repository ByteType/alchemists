import React, { useState, useEffect } from "react";
import { apiEndpoints } from "../../config/ApiEndpoints";

export default function LockerPicker({ onLockerChange, label, name, value }) {
  const [lockers, setLockers] = useState([]);
  const [selectedLocker, setSelectedLocker] = useState(value);

  useEffect(() => {
    fetch(apiEndpoints.LOCKER_PICKER)
      .then((response) => response.json())
      .then((data) => {
        setLockers(data);
        if (value) {
          setSelectedLocker(value);
        } else if (data && data.length > 0) {
          setSelectedLocker(data[0].id.toString());
          onLockerChange(data[0].id.toString(), name);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, [value, name, onLockerChange]);

  const handleSelect = (e) => {
    const lockerValue = e.target.value;
    setSelectedLocker(lockerValue);
    onLockerChange(lockerValue, name);
  };

  return (
    <>
      <label className="locker-select">
        <span>{label}: </span>
        <select value={selectedLocker} onChange={handleSelect}>
          {lockers.map((locker) => (
            <option key={locker.id} value={locker.id}>
              {locker.location}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
