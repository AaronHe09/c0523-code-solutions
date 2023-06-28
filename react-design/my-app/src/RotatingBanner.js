import NavigationButton from './NavigationButton';
import IndexButtons from './IndexButtons';
import Banner from './Banner';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleButtonsOnClick(e) {
    const int = parseInt(e.target.textContent);
    setCurrentIndex(int);
  }

  function handleDecrement() {
    if (currentIndex === 0) {
      return;
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleIncrement() {
    if (currentIndex === items.length - 1) {
      return;
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div>
      <Banner index={items[currentIndex]} />
      <NavigationButton text={'Prev'} handler={handleDecrement} />
      <IndexButtons
        items={items}
        handleOnClick={handleButtonsOnClick}
        index={currentIndex}
      />
      <NavigationButton text={'Next'} handler={handleIncrement} />
    </div>
  );
}
