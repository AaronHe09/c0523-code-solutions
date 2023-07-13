import { FaLessThan, FaGreaterThan } from 'react-icons/fa';

export default function NavigationButton({ text, onClick }) {
  if (text === 'less') {
    return <FaLessThan onClick={onClick} />;
  }
  if (text === 'greater') {
    return <FaGreaterThan onClick={onClick} />;
  }
}
