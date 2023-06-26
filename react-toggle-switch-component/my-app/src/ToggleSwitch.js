import './ToggleSwitch.css';
import { useState } from 'react';

export default function ToggleSwitch() {
  const [checked, setChecked] = useState('On');

  return (
    <div className="toggleSwitch-container">
      <label className="switch">
        <input
          type="checkbox"
          className="checkbox"
          onChange={(e) =>
            e.target.checked ? setChecked('On') : setChecked('False')
          }></input>
        <span className="slider"></span>
      </label>
      <span>{checked}</span>
    </div>
  );
}
