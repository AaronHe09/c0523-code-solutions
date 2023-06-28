import NavigationButton from './NavigationButton';
import IndexButtons from './IndexButtons';
import Banner from './Banner';

export default function RotatingBanner({ items }) {
  return (
    <div>
      <Banner items={items} />
      <NavigationButton text={'Prev'} />
      <IndexButtons />
      <NavigationButton text={'Next'} />
    </div>
  );
}
