import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton color="red" text="btn1" />
      <ToggleButton color="blue" text="btn2" />
      <ToggleButton color="green" text="btn3" />
    </div>
  );
}

export default App;
