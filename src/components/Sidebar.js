import React from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useGlobalContext } from "../context";

function Sidebar() {
  const { sidebarActive, setSidebarActive } = useGlobalContext();
  return (
    <div className={sidebarActive ? "sidebar active" : "sidebar"}>
      <CgClose
        className="sidebar-close"
        onClick={() => setSidebarActive(false)}
      />
      <Search sidebar={sidebarActive ? "active" : "not-active"} />
      <ul className="sidebar-links">
        <li>
          <Link to="/" onClick={() => setSidebarActive(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setSidebarActive(false)}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
