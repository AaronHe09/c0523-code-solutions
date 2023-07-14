import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

export default function NavigationButton({ text, onClick }) {
  if (text === 'less') {
    return <FontAwesomeIcon icon={faLessThan} onClick={onClick} />;
  }
  if (text === 'greater') {
    return <FontAwesomeIcon icon={faGreaterThan} onClick={onClick} />;
  }
}
