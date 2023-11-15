import React, {useEffect, useState} from 'react';
import Cabinet from './Cabinet';
import styles from './Locker.module.css';

function Locker({ id, onCabinetClick }) {
    const [lockerData, setLockerData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchLockerData() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/locker/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setLockerData(data);
                } else {
                    setError(`HTTP error! Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching locker data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchLockerData().then();
    }, [id]);

    if (isLoading) {
        return (
            <div className="loading">
                <div className="loading-animation"></div>
                Loading...
            </div>
        );
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <>
            <h2>Locker Location: {lockerData.location}</h2>
            <div className={styles.locker}>
                {lockerData.cabinets.map((cabinet, index) => (
                    <Cabinet
                        key={index}
                        isOccupied={cabinet.isLocked}
                        onClick={() => onCabinetClick(cabinet.id)}
                    />
                ))}
            </div>
        </>
    )
}

export default Locker;
