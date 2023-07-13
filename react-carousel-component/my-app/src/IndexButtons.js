import './IndexButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as solid } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regular } from '@fortawesome/free-regular-svg-icons';

export default function IndexButtons({ items, onIndex, index }) {
  return (
    <div>
      {items.map((item) => (
        <FontAwesomeIcon
          icon={index === items.indexOf(item) ? solid : regular}
          key={item}
          onClick={() => onIndex(items.indexOf(item))}
          className="index-button"
        />
      ))}
    </div>
  );
}
