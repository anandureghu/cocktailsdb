import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Search from "./Search";
import { useGlobalContext } from "../context";

function Navbar() {
  const { sidebarActive, setSidebarActive } = useGlobalContext();
  return (
    <nav>
      <div className="nav__main">
        <Link to="/" className="nav__main--heading">
          <h1 className="nav__main--heading">CocktailsDB</h1>
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
        </ul>
      </div>

      <Search />

      <HiOutlineMenuAlt4
        className="nav-menu-btn"
        onClick={() => setSidebarActive(true)}
      />
    </nav>
  );
}

export default Navbar;
