import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import productsData from "../../public/products.json";

const Products = () => {
  const location = useLocation();
  const isProductsPage = location.pathname === "/products";
  const productsToShow = isProductsPage
    ? productsData
    : productsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
<div className="relative text-center mb-16">

  <div className="relative z-10 px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 ">
      {isProductsPage ? "All Products" : "Featured Products"}
    </h2>
    <p className="text-black md:text-lg">
      {isProductsPage
        ? "Explore all our collections and find your perfect product"
        : "Handpicked favorites just for you"}
    </p>
  </div>
</div>


        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {productsToShow.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        {!isProductsPage && (
          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition"
            >
              View All Products <FaArrowRight className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
