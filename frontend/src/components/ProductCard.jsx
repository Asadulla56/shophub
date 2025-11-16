import { Link } from "react-router-dom";
import { FaStar, FaArrowRight } from "react-icons/fa";

const ProductCard = ({ _id, name, price, image, rating, category }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
      <Link to={`/products/${_id}`}>
        <div className="relative overflow-hidden aspect-square bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
            {category}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/products/${_id}`}>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({rating})</span>
        </div>

        <p className="text-2xl font-bold text-indigo-600">${price.toFixed(2)}</p>

        <Link
          to={`/products/${_id}`}
          className="mt-4 inline-flex items-center justify-center w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          View Details <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
