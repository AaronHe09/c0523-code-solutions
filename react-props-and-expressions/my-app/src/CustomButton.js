import './CustomButton.css';

export default function CustomButton(props) {
  return <button className={props.color}>{props.text}</button>;
}
