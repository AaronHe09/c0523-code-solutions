import Topics from './Topics';
import { useState } from 'react';

export default function Accordion({ topics }) {
  const [clicked, setClicked] = useState('');

  function handleTopicsOnClick(topic) {
    if (clicked === topic) {
      setClicked('');
    } else {
      setClicked(topic);
    }
  }

  return (
    <Topics
      topics={topics}
      handleOnClick={handleTopicsOnClick}
      clicked={clicked}
    />
  );
}
