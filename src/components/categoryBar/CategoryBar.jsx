import React, { useState, useEffect } from "react";
import "./CategoryBar.css";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/categories");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCats(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="category-bar-container">
      <div className="category-bar-wrapper">
        <Link to="/" className="link">
          <div className="category-bar-item">All</div>
        </Link>
        {cats.map((c) => (
          <Link key={c._id} to={`/?cat=${c.name}`} className="link">
            <div className="category-bar-item">{c.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
