import React, { useState, useEffect } from "react";
import "./CategoryBar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCat();
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
