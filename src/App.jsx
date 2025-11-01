import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

function App() {
  return <div className=" flex flex-col min-h-screen">
    <Navbar/>
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
    <Footer/>
  </div>;
}

export default App;
