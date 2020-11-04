import React, { useState, useEffect } from 'react';
import './style.css';

function RealTimeClock() {

    const [clock, setClock] = useState('🕒');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            let today = new Date();
            let hour = today.getHours();
            let minutes = today.getMinutes();
            let printHour = "";
            let printMinutes = "";
            if (hour < 10) {
                printHour = `0${hour}`;
            } else {
                printHour = `${hour}`;
            }
            if (minutes < 10) {
                printMinutes = `0${minutes}`;
            } else {
                printMinutes = `${minutes}`;
            }
            setClock(printHour + ':' + printMinutes + ' 🕒');
        }, 1000);
        return () => clearInterval(clockInterval);
    }, []);

    return (
        <div className="clock">
            <p>{clock}</p>
        </div>
    );
}

export default RealTimeClock;
