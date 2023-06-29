import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useState } from 'react';

export default function SearchableList({ array }) {
  const [searchValue, setSearchValue] = useState('');

  function handleSearchOnChange(inputValue) {
    const value = inputValue;
    setSearchValue(value);
  }

  return (
    <div>
      <SearchBar onChange={handleSearchOnChange} />
      <SearchResults array={array} searchValue={searchValue} />
    </div>
  );
}
