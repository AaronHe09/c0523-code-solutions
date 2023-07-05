import logo from './logo.svg';
import './App.css';
import SearchableList from './SearchableList';

function App() {
  const array = [
    'Yer a wizard Harry',
    "I hope you're pleased with yourselves.",
    'It does not do well to dwell on dreams and forget to live.',
    "You're a little scary sometimes, you know that? Brillant... but scary.",
    'There will be no foolish wand-waving or silly incantations in this class.',
    'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
    'If there is one thing Voldemort cannot understand, it is love.',
    'As much as money and life as you could want!',
    'The truth. It is beautiful and terrible thing, and should therefore be treated with great caution.',
    "There are some things you can't share without ending up liking each other.",
    'Ah, music. A magic beyond all we do here!',
  ];

  return (
    <div className="App">
      <SearchableList array={array} />
    </div>
  );
}

export default App;
