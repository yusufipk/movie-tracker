import React from "react";
import "./searchbar.styles.scss";

const SearchBar = ({ placeholder, onChangeHandler, value }) => {
  return (
    <div className="search">
      <input
        type="search"
        size="100"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export default SearchBar;
