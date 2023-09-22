import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Hours from './Hours';
import './style.css';

function August() {
  let [numDay, setNumDay] = useState(null);
  let [arrMarkDays, setArrMarkDays] = useState(() => {
    const storedArr = JSON.parse(localStorage.getItem('Yurii'));
    return storedArr || Array(30).fill(null);
  });

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem('Yurii', JSON.stringify(arrMarkDays));
  }, [arrMarkDays]);
  
  function markDay(num) {
    setNumDay(num);
    setArrMarkDays([
      ...arrMarkDays.slice(0, num),
      'day red',
      ...arrMarkDays.slice(num + 1, 30),
    ]);
  }
  

  return (
    <div className="august">
      <p>Сентябрь</p>
      <div className="month">
        {[...Array(4)].map((elem) => (
          <p key={nanoid()} className="empty"></p>
        ))}
        {[...Array(30)].map((elem, ind) => (
          <p
            className={arrMarkDays[ind] ? 'day red' : 'day'}
            key={nanoid()}
            onClick={() => markDay(ind)}
          >
            {ind + 1}
          </p>
        ))}
      </div>
      <Hours numDay={numDay} />
    </div>
  );
}

export default August;
