import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

function Search({ sidebar }) {
  const { setSidebarActive, setSearchKeyword } = useGlobalContext();

  const searchinput = useRef(null);

  const searchCocktail = (e) => {
    e.preventDefault();
    setSidebarActive(false);
    fetchCocktail();
  };

  const fetchCocktail = () => {
    setSearchKeyword(searchinput.current.value);
  };

  console.log(sidebar);

  return (
    <form onSubmit={searchCocktail} className="nav__search--form">
      <div
        className={sidebar === "active" ? "nav__search active" : "nav__search"}
      >
        <input
          type="text"
          className="nav__search--input"
          ref={searchinput}
          onChange={fetchCocktail}
        />
        <button className="searchIcon" type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default Search;
