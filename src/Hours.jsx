import React, { useState, useEffect } from 'react';

function Hours({ numDay }) {
  let [value, setValue] = useState(0);
  let [hours, setHours] = useState(0);
  let [counterNights, setCounterNights] = useState(() => {
    const storedCounterNights = localStorage.getItem('counterNights');
    return storedCounterNights ? parseInt(storedCounterNights, 10) : 0;
  })
  let [counterDays, setCounterDays] = useState(() => {
    const storedCounterDays = localStorage.getItem('counterDays');
    return storedCounterDays ? parseInt(storedCounterDays, 10) : 0;
  })
  let [counterHours, setCounterHours] = useState(() => {
    const storedCounterHours = localStorage.getItem('counterHours');
    return storedCounterHours ? parseInt(storedCounterHours, 10) : 0;
  })
  let nightDays = [1,17,18,19,20,21,22];
  let [money, setMoney] = useState(0);

  useEffect(() => {
    setValue(numDay)
    localStorage.setItem('counterNights', counterNights.toString());
    localStorage.setItem('counterDays', counterDays.toString());
    localStorage.setItem('counterHours', counterHours.toString());
    setMoney(counterHours*7.5+counterNights*5.5*1.5);
  }, [numDay, counterNights, counterHours, counterDays, money]);

  function saveHours() {
    if (value) {
      setHours(hours+(+value));
      if (nightDays.includes(numDay+1)) setCounterNights(counterNights + 1);
      setCounterDays(counterDays+1);
      setCounterHours(counterHours+(+value))
      setValue(0)
    }
  }

  return (
    <div>
      <input value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={saveHours}>Сохранить</button>
      <p>Отработано {counterDays} дней</p>
      <p>Отработано {counterHours} часов</p>
      <p>Отработано {counterNights} ночных смен</p>
      <p>Заработано за сентябрь {money} евро</p>
    </div>
  );
}

export default Hours;
