import './IndexButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as solid } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regular } from '@fortawesome/free-regular-svg-icons';

export default function IndexButtons({ items, onIndex, index }) {
  return (
    <div>
      {items.map((item, idx) => (
        <FontAwesomeIcon
          icon={index === idx ? solid : regular}
          key={idx}
          onClick={() => onIndex(idx)}
          className="index-button"
        />
      ))}
    </div>
  );
}
