import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import "./navBar.modules.css";
import Logo from "../../img/LogoISO.jpg";

export default function NavBar() {
  return (
      <div className="navBar">
        <Link exact to="/home">
          <img className="logo" src={Logo} />
        </Link>
        <Link className="link" to="/addactivity">
          <button className='addActivity-button' >Add activities</button>
        </Link>
        <div className="searchBar">
          <SearchBar />
        </div>
      </div>
  );
}
