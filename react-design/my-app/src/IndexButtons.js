import './IndexButtons.css';

export default function IndexButtons({ items, handleOnClick, index }) {
  return (
    <div>
      {items.map((item) => (
        <button
          key={item}
          onClick={() => handleOnClick(items.indexOf(item))}
          className="index-button"
          style={{
            backgroundColor:
              index === items.indexOf(item) ? '#A2CAF8' : 'white',
          }}>
          {items.indexOf(item)}
        </button>
      ))}
    </div>
  );
}
