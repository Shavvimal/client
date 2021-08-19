import React from "react";
import { useState, useEffect } from "react";

const Transition = () => {
  const [seconds, setSeconds] = useState(3);
  const [number, setNumber] = useState(3);

  useEffect(() => {
    if (seconds < -1) {
      return;
    }
    const timer1 = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 2000);

    return () => clearTimeout(timer1);
  });

  useEffect(() => setNumber(`${seconds}`), [seconds]);

  if (seconds <= -1) {
    return <p></p>;
  }

  return (
    <div className='Transition'>
      <p>{number}</p>
    </div>
  );
};

export default Transition;
