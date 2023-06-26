import { useState } from 'react';
import './Button.css';

export default function Button() {
  let [int, setInt] = useState(0);

  function handleIncrement() {
    setInt(int + 1);
  }

  function handleDecrement() {
    setInt(int - 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>Down</button>
      <span>{int}</span>
      <button onClick={handleIncrement}>Up</button>
    </div>
  );
}
