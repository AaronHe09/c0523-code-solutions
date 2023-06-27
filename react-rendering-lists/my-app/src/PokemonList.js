import './PokemonList.css';

export default function PokemonList({ array }) {
  return (
    <ul>
      {array.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
