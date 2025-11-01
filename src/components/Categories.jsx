// components/Categories.jsx
import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600 transition"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
