import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"Products"}>Products</Link>
        <Link to={"Contact"}>Contact</Link>
      </nav>
    </>
  );
}

export default Header;
