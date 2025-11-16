import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "./Products"; 

const Home = () => {
  const categories = ["Electronics", "Fashion", "Home Decor", "Sports & Fitness"];

  return (
    <div>
      <Hero />
      <Categories categories={categories} />
      <Products />
    </div>
  );
};

export default Home;
