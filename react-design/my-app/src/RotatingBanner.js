import NavigationButton from './NavigationButton';
import IndexButtons from './IndexButtons';
import Banner from './Banner';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Banner text={items[currentIndex]} />
      <NavigationButton text={'Prev'} />
      <IndexButtons items={items} />
      <NavigationButton text={'Next'} />
    </div>
  );
}
