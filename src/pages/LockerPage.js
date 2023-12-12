import React, { useEffect, useState } from "react";
import { CabinetState } from "../enum/CabinetState";
import { apiEndpoints } from "../config/ApiEndpoints";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/DriverPage/Sidebar";
import Locker from "../components/DriverPage/Locker";
import Cabinet from "../components/DriverPage/Cabinet";
import Parcel from "../components/DriverPage/Parcel";
import Detail from "../components/DriverPage/Detail";
import styles from "./LockerPage.module.css"

export default function LockerPage() {
  const [selectedLockerId, setSelectedLockerId] = useState(null);
  const [selectedLockerLocation, setSelectedLockerLocation] = useState(null);
  const [selectedCabinets, setSelectedCabinets] = useState([]);
  const [selectedCabinetId, setSelectedCabinetId] = useState(null);
  const [selectedCabinetState, setSelectedCabinetState] = useState(null);
  const user = useAuth();

  useEffect(() => {
    if (selectedLockerId !== null) {
      fetch(`${apiEndpoints.DRIVER_LOCKER}/${selectedLockerId}`)
        .then(response => response.json())
        .then(data => setSelectedCabinets(data.cabinets))
        .catch(error => console.error('Error fetching locker data:', error));
    }
  }, [selectedLockerId]);

  function handleSelectLocker(id, location) {
    setSelectedLockerId(id);
    setSelectedCabinetId(null);
    setSelectedLockerLocation(location);
  }

  function handleSelectCabinet(id, type) {
    setSelectedCabinetId(id);
    setSelectedCabinetState(type);
  }

  async function handleParcelArrive(parcelId) {
    try {
      const response = await fetch(apiEndpoints.DRIVER_ARRIVE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({
          id: parcelId,
          cabinetId: selectedCabinetId
        })
      });

      if (response.ok) {
        setSelectedCabinets(prevState =>
          prevState.map(cabinet => selectedCabinetId === cabinet.id
            ? { id: selectedCabinetId, type: CabinetState.PICKUP_PARCEL_EXIST }
            : cabinet));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function handleParcelDistribute(parcelId) {
    try {
      const response = await fetch(apiEndpoints.DRIVER_DISTRIBUTE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({
          id: parcelId,
          cabinetId: selectedCabinetId
        })
      });

      if (response.ok) {
        setSelectedCabinets(prevState =>
          prevState.map(cabinet => selectedCabinetId === cabinet.id
            ? { id: selectedCabinetId, type: CabinetState.OPEN }
            : cabinet));
      }
    } catch (error) {
      console.error("Error:", error);
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
          <div className={styles.container}>
            <div className={`${styles.panel} ${!!selectedLockerId ? styles.small : styles.large}`}>
              <Locker onSelect={handleSelectLocker} />
            </div>

            <div className={!!selectedLockerId ? `${styles.panel} ${styles.small}` : ""}>
              {!!selectedLockerId &&
                <Cabinet cabinets={selectedCabinets} onSelect={handleSelectCabinet} />}
            </div>

            <div className={!!selectedLockerId && !!selectedCabinetId ? `${styles.panel} ${styles.large}` : ""}>
              {!!selectedLockerId && !!selectedCabinetId &&
                (selectedCabinetState === CabinetState.OPEN
                  ? <Parcel location={selectedLockerLocation} onClick={handleParcelArrive} />
                  : <Detail id={selectedCabinetId} status={selectedCabinetState} onClick={handleParcelDistribute} />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
