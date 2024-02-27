import React, { useState, useRef } from 'react';
import './counter.css';

function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const handleTimeChange = (event) => {
    setTime(parseInt(event.target.value));
  };

  return (
    <div className='counter'>
      <h1>Countdown Timer</h1>
      <div>
        <label>Set Time (seconds):</label>
        <input 
          type="number"
          value={time}
          onChange={handleTimeChange}
          disabled={isRunning}
        />
      </div>
      <div className='start'>
        <button onClick={isRunning ? stopTimer : startTimer}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
      <div style={{marginTop:"30px"}} className='time'>
          <label >countdown ends in</label>
          <div className='currentTime' style={isRunning?{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 50px 0 rgba(0, 0, 0, 0.14)"}:{}}>
            <h4 style={{fontSize:"xx-large",padding:"10px",paddingTop:'15px',paddingBottom:'16px'}}>{time}</h4>
          </div>
            
      </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
