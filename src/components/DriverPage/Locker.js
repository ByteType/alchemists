import React from 'react';
import Cabinet from './Cabinet';
import styles from './Locker.module.css';

function Locker({ cabinets, onCabinetClick }) {
    return (
        <div className={styles.locker}>
            {cabinets.map((cabinet, index) => (
                <Cabinet
                    key={index}
                    isOccupied={cabinet.isLocked}
                    onClick={() => onCabinetClick(cabinet.id)}
                />
            ))}
        </div>
    )
}

export default Locker;
