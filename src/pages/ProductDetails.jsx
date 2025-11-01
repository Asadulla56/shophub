import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Heart, ShoppingCart } from "lucide-react";
import productsData from "../../public/products.json";
import { toast } from "sonner";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    toast.success("Added to wishlist!", {
      description: `${product.name} has been saved to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="bg-gray-100 border-b">
          <div className="container mx-auto px-4 py-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-indigo-600 font-medium group"
            >
              <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Products
            </Link>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Image */}
              <div>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1.5 rounded-md shadow">
                    {product.category}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-500 text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500">
                      ({product.rating}) • 256 reviews
                    </span>
                  </div>
                  <p className="text-4xl font-bold text-blue-600 mb-6">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                    >
                      <ShoppingCart className="h-5 w-5" /> Add to Cart
                    </button>
                    <button
                      onClick={handleAddToWishlist}
                      className="flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                    >
                      <Heart className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div className="p-4 rounded-lg bg-gray-100">
                      <div className="font-semibold">Free Shipping</div>
                      <div className="text-gray-500">On orders $50+</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-100">
                      <div className="font-semibold">30-Day Returns</div>
                      <div className="text-gray-500">Easy returns</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-100">
                      <div className="font-semibold">2-Year Warranty</div>
                      <div className="text-gray-500">Full coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <div
                    key={relatedProduct.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard {...relatedProduct} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProductDetails;
