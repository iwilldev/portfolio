import React from 'react';
import Clock from 'react-live-clock';
import './style.css';

function RealTimeClock() {

    return (
        <div className="clock">
            <Clock format={'HH:mm'} ticking={true} timezone={'America/Sao_Paulo'} />
        </div>
    );
}

export default RealTimeClock;

