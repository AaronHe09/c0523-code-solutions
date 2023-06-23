import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }

  return (
    <div className="App">
      <CustomButton
        color="blue"
        text="blue"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="pink"
        text="pink"
        onCustomClick={handleCustomClick}
      />
      <CustomButton color="red" text="red" onCustomClick={handleCustomClick} />
    </div>
  );
}

export default App;
