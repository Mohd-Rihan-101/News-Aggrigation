import React from "react";
import "./../styles/style.css";

const Navbar = ({ setCategory }) => {
  const categories = ["general", "business", "sports", "technology", "entertainment", "health"];

  return (
    <nav className="navbar">
      <h1 className="brand">📰 News Aggregator</h1>
      <ul className="nav-links">
        {categories.map((category) => (
          <li key={category} onClick={() => setCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
