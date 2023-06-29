export default function SearchBar({ onChange }) {
  return (
    <input placeholder="search" onChange={(e) => onChange(e.target.value)} />
  );
}
