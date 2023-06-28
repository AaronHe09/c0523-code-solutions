export default function IndexButtons({ items }) {
  return (
    <div>
      {items.map((item) => (
        <button key={item}>{items.indexOf(item)}</button>
      ))}
    </div>
  );
}
