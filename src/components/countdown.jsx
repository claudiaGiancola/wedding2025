import React, { Component } from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export default function Countdown() {
    return (
        <div className="countdown-container pt-2">
            <FlipClockCountdown
                to={new Date("2025-09-06T16:30:00").getTime() + 24 * 3600 * 1000 + 5000}
                className="countdown"
                labels={['Days', 'Hours', 'Minutes', 'Seconds']}
                // labelStyle={{ fontSize: 12, fontWeight: 500, color: 'green' }}
                digitBlockStyle={{ width: 30, height: 45, fontSize: 30, background: '#f6b092', borderRadius: 8, boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }}
            />
        </div>
    );
}