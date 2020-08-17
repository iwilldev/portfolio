import React, { useState, useEffect } from 'react';
import './style.css';

function RealTimeClock() {

    const [clock, setClock] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            var today = new Date();
            var hour = today.getHours();
            var minutes = today.getMinutes();
            if (hour < 10) {
                hour = "0" + hour;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            setClock(hour+':'+minutes);
        }, 1);
        return () => clearInterval(clockInterval);
    }, []);

    return (
        <div className="clock">
            {clock}
        </div>
    );
}

export default RealTimeClock;
