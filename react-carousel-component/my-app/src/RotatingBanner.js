import NavigationButton from './NavigationButton';
import IndexButtons from './IndexButtons';
import Banner from './Banner';
import './RotatingBanner.css';
import { useState, useEffect, useCallback } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIncrement = useCallback(() => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, items]);

  useEffect(() => {
    const id = setInterval(handleIncrement, 3000);
    console.log('effect');

    return () => clearInterval(id);
  }, [handleIncrement]);

  function handleIndexButtons(index) {
    setCurrentIndex(index);
  }

  function handleDecrement() {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="container">
      <div className="wrapper">
        <NavigationButton text={'less'} onClick={handleDecrement} />
        <Banner path={items[currentIndex]} />
        <NavigationButton text={'greater'} onClick={handleIncrement} />
      </div>
      <IndexButtons
        items={items}
        onIndex={handleIndexButtons}
        index={currentIndex}
      />
    </div>
  );
}
