import "./App.css";
import Products from "./componenets/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componenets/navbar/Navbar";
import MenClothing from "./componenets/Categories/MenClothing";
import WomenClothing from "./componenets/Categories/WomenClothing";
import Jewelery from "./componenets/Categories/Jewelery";
import Electronics from "./componenets/Categories/Electronics";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/MenClothing" element={<MenClothing /> } />
          <Route path="/WomenClothing" element ={<WomenClothing /> } />
          <Route path="/Jewelery" element={<Jewelery />} />
          <Route path="/Electronics" element={<Electronics />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
