import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return <div className=" flex flex-col min-h-screen">
    <Navbar/>
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </div>
    <Footer/>
  </div>;
}

export default App;
