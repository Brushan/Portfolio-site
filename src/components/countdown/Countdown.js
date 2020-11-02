import React, { useState, useEffect } from 'react';
import './Countdown.scss';

const Countdown = () => {

  const [countdown, setCountdown] = useState(5);
  const [interval, setIntervalId] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown => countdown - 1); 
    }, 1200);
    setIntervalId(interval)
    return () => {
      clearInterval(interval)
    }
  }, []);

  if (countdown === 0) {
    clearInterval(interval)
  }

  return (
    <section className="countdown">
      <div className="countdown__currentCount">
        <div className="countdown__currentCount__count">
          <h1>{countdown}</h1>
        </div>
      </div>
    </section>
  )
}

export default Countdown;
