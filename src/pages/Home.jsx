import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "./Products"; 
import productsData from "../../public/products.json";

const Home = () => {
  const categories = ["Electronics", "Fashion", "Home Decor", "Sports & Fitness"];

  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      <Hero />
      <Categories categories={categories} />
      <Products products={featuredProducts} />
    </div>
  );
};

export default Home;
