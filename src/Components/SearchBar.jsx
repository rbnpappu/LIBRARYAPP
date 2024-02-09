import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { debounce } from "lodash"; // Import debounce function from lodash
import classes from '../styles/style.module.css';

function SearchBar() {
  const [title, setTitle] = useState("");
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce the handleSearch function to delay API request
  const handleSearchDebounced = debounce(handleSearch, 100);

  async function handleSearch() {
    setLoading(true);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data && data.docs) {
        setBooksData(data.docs);
      }

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  function handleChange(event) {
    setTitle(event.target.value);
    handleSearchDebounced(); // Trigger search after debounce delay
  }

  return (
    <div className={classes.searchBarContainer}>
      <div className={classes.searchbar}>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Search for books..."
        />
        <button onClick={handleSearch}>Search</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </div>
      <div className={classes.searchResults}>
        <SearchResults booksData={booksData} />
      </div>
    </div>
  );
}

export default SearchBar;
