import React from 'react';
import styles from './Cabinet.module.css';

function Cabinet({ isOccupied, onClick }) {
    return (
        <button className={`${styles.cabinet} ${isOccupied ? styles.occupied : styles.free}`} onClick={onClick}>
        </button>
    );
}

export default Cabinet;
