import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ category, onCategorySelect }) => {
  return (
    <button
      className="category-button"
      onClick={() => {
        onCategorySelect(category);
      }}
    >
      {category}
    </button>
  );
};

export default CategoryItem;
