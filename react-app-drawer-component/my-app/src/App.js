import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AppDrawer from './AppDrawer';

const menuItems = ['About', 'Get Started', 'Sign In'];

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [header, setHeader] = useState('');

  function handleIcon() {
    setMenuClicked(true);
  }

  function handleMenu(item) {
    setMenuClicked(false);
    setHeader(item);
  }

  return (
    <div className={`App ${menuClicked ? 'shade' : ''}`}>
      <h1>{header}</h1>
      <AppDrawer
        menuClicked={menuClicked}
        menuItems={menuItems}
        handleIcon={handleIcon}
        handleMenu={handleMenu}
      />
    </div>
  );
}

export default App;
