import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>
        <Link to="/">Home</Link>
        <Link to="/MenClothing">Men Clothing</Link>
        <Link to="/WomenCloting">Women Clothing</Link>
        <Link to="/Jewelery">Jewelery</Link>
        <Link to="/Electronics">Electronics</Link>
      </h1>
    </div>
  );
};

export default Navbar;
