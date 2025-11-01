import { Link } from "react-router-dom";
import { FaTag } from "react-icons/fa";

const Categories = ({ categories }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600">
            Explore our diverse range of products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FaTag className="text-indigo-600 text-3xl mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold group-hover:text-indigo-600 transition-colors">
                {category}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
