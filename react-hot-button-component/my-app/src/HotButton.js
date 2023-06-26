import { useState } from 'react';

const colors = [
  'black',
  '#351C75',
  '#664EA7',
  '#E06666',
  '#F6B26B',
  '#FFFF1B',
  '#FFFFFF',
];
let c = 0;
let fontColor = -1;

export default function HotButton() {
  let [count, setCount] = useState(0);
  let [i, setI] = useState(0);

  function handleOnClick() {
    c++;
    setCount(c);

    if (c === 0) {
      return;
    } else if (c % 3 === 0) {
      setI(i + 1);
    }

    if (c === 12) {
      fontColor = 0;
    }
  }

  return (
    <div>
      <button
        onClick={handleOnClick}
        style={{
          backgroundColor: colors[i],
          color: colors.at(fontColor),
          padding: '.5rem',
          marginRight: '1rem',
        }}>
        Hot Button
      </button>
      <span>{count}</span>
    </div>
  );
}
