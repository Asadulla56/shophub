// components/ProductCard.jsx
import React from "react";

const ProductCard = ({ name, category, price, image, description, rating }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-3" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="font-bold">${price.toFixed(2)}</span>
        <span className="text-yellow-500 font-semibold">{rating}⭐</span>
      </div>
    </div>
  );
};

export default ProductCard;
