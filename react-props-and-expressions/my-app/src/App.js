import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <CustomButton color="purple" text="I" />
      <CustomButton color="red" text="Second" />
      <CustomButton color="gray" text="React!" />
    </div>
  );
}

export default App;
