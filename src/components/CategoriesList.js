import React from "react";
import CategoryItem from "./CategoryItem";
import "./CategoryList.css";

const CategoriesList = ({ categories, onCategorySelect }) => {
  const renderedList = categories.map((category, index) => {
    return (
      <CategoryItem
        key={index + 1}
        category={category}
        onCategorySelect={onCategorySelect}
      />
    );
  });
  return <div className="grid categories-list">{renderedList}</div>;
};

export default CategoriesList;
