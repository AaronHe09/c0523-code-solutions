import './AppDrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function AppDrawer({
  menuClicked,
  menuItems,
  handleIcon,
  handleMenu,
}) {
  return (
    <div className="container">
      <FontAwesomeIcon
        className={menuClicked ? 'hidden' : ''}
        icon={faBars}
        size="lg"
        onClick={handleIcon}
      />
      <div className={`menu-container ${menuClicked ? 'open' : ''}`}>
        <h2>Menu</h2>
        <ul>
          <RenderMenu
            menuClicked={menuClicked}
            menuItems={menuItems}
            handleMenu={handleMenu}
          />
        </ul>
      </div>
    </div>
  );
}

function RenderMenu({ menuClicked, menuItems, handleMenu }) {
  return menuItems.map((item) => (
    <li key={item} onClick={() => handleMenu(item)}>
      {item}
    </li>
  ));
}
