import React, { useRef, useState } from "react";

const StopWatch = () => {
  const startTime = useRef(null);
  const intervalRef = useRef(null);
  const [curr_time, setCurrTime] = useState(null);
  const [laps, setLaps] = useState([]);
  let seconds_Elapsed = 0;

  const startStopWatch = () => {
    startTime.current = Date.now();
    setLaps([])
    intervalRef.current = setInterval(() => {
      setCurrTime(Date.now());
    }, 10);
  };

  const stopStopWatch = () => {
    clearInterval(intervalRef.current);
  };
    const trackLap = () => {
      setLaps([...laps, seconds_Elapsed])
  };

  seconds_Elapsed = (curr_time - startTime.current) / 1000;
  return (
    <>
      <section>
        <h1>{seconds_Elapsed.toFixed(3)}</h1>
        <button onClick={startStopWatch}>Start</button>
              <button onClick={stopStopWatch}>Stop</button>
              <button onClick={trackLap}>Lap</button>
      </section>
      {laps?.length ? (
        <section>
          <h2>Laps</h2>
          {laps.map((lap) => (
            <p key={lap}>{lap}</p>
          ))}
        </section>
      ) : null}
    </>
  );
};

export default StopWatch;
