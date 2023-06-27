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

export default function HotButton() {
  let [count, setCount] = useState(0);
  let [fontColor, setFontColor] = useState(-1);
  const color = handleOnClick();

  function handleOnClick() {
    if (count === 12) {
      setFontColor(0);
    }

    if (count < 3) return colors[0];
    if (count < 6) return colors[1];
    if (count < 9) return colors[2];
    if (count < 12) return colors[3];
    if (count < 15) return colors[4];
  }

  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: color,
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
