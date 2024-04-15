import React, { useState } from 'react';
import style from '../Styles/styleSemaforo.css';

const Semaforo = () => {
  const [inactiveColor, setInactiveColor] = useState(null);

  const handleClick = (newColor) => {
    setInactiveColor(newColor);
  };

  return (
    <div className={style.semafaro}> 
      <div
        className={`color red ${inactiveColor === 'yellow' || inactiveColor === 'green' ? 'inactive' : ''}`}
        onClick={() => handleClick('red')}
      ></div>
      <div
        className={`color yellow ${inactiveColor === 'red' || inactiveColor === 'green' ? 'inactive' : ''}`}
        onClick={() => handleClick('yellow')}
      ></div>
      <div
        className={`color green ${inactiveColor === 'red' || inactiveColor === 'yellow' ? 'inactive' : ''}`}
        onClick={() => handleClick('green')}
      ></div>
    </div>
  );
};

export default Semaforo;