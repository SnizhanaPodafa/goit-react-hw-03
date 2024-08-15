import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ filter, handleSearch }) => {
  return (
    <>
      <p className={s.desc}>Find contact by name</p>
      <input
        className={s.input}
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleSearch}
      />
    </>
  );
};

export default SearchBox;
