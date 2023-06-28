export default function NavigationButton({ text, handler }) {
  return <button onClick={handler}>{text}</button>;
}
