import React, { Component } from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export default function Countdown() {
    return (
        <div className='pt-10'>
            <FlipClockCountdown
                to={new Date("2025-09-06T16:30:00").getTime() + 24 * 3600 * 1000 + 5000}
                className="countdown"
                labels={['Giorni', 'Ore', 'Minuti', 'Secondi']}
                labelStyle={{ fontSize: 16, color: 'white'}}
                digitBlockStyle={{ width: 30, height: 50, fontSize: 35, background: '#f6b092', borderRadius: 8, boxShadow: '0 6px 8px rgba(0, 0, 0, 0.4)' }}
            />
        </div>
    );
}