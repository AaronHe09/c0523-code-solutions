import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('userState', isClicked);

  function handleClick() {
    console.log(isClicked);
    setIsClicked(!isClicked);
    console.log(isClicked);
  }

  if (isClicked) {
    return (
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {text}
      </button>
    );
  } else {
    return <button onClick={handleClick}></button>;
  }
}
