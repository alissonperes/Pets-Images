import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <Link className="navbar-brand text-white" to="./">
        Dogs
      </Link>
      <Link className="navbar-brand text-white" to="./cat">
        Cats
      </Link>
    </nav>
  );
};

export default Header;
