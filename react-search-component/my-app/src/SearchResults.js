import './SearchResults.css';

export default function SearchResults({ array, searchValue }) {
  function renderAll() {
    return array.map((string) => <li key={array.indexOf(string)}>{string}</li>);
  }

  function renderSearchValue() {
    const newArray = array.filter((string) =>
      string.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (newArray.length === 0) {
      return <p>No items match the filter</p>;
    } else {
      return newArray.map((string) => (
        <li key={newArray.indexOf(string)}>{string}</li>
      ));
    }
  }

  return <ul>{searchValue.length > 0 ? renderSearchValue() : renderAll()}</ul>;
}
