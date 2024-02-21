import React from "react";
import logo from "./logo.webp";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import "./header.sass";

const Header = () => {
  return (
    <nav className="header">
    <Link to="/">  <img className="logo" src={logo} alt="Netflix Img" /></Link>
      <div className="links">
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/RecentAdded">Recently Added</Link>
        <Link to="/MyList">My List</Link>
      </div>
      <div className="search">
        <ImSearch></ImSearch>
      </div>
    </nav>
  );
};

export default Header;
