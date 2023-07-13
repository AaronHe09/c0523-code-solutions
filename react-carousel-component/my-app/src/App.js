import './App.css';
import RotatingBanner from './RotatingBanner';
import pokemon1 from './images/001.png';
import pokemon2 from './images/004.png';
import pokemon3 from './images/007.png';
import pokemon4 from './images/025.png';
import pokemon5 from './images/039.png';

const images = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];

function App() {
  return (
    <div className="App">
      <RotatingBanner items={images} />
    </div>
  );
}

export default App;
