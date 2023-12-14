import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/functional/Navbar";
import ProductList from "./components/pages/ProductList";
import './App.css';
import ProductDetails from "./components/pages/ProductDetails";
import { ShoppingCartProvider, ShoppingCartContext } from "./components/pages/Shoppingcart";
//import Checkout from "./components/pages/Checkout";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<p>Index Page</p>}></Route>
        <Route path="/list" element={<ProductList></ProductList>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/cart" element={<ShoppingCartProvider children></ShoppingCartProvider>}></Route>
        <Route path="/check" element={"FOO"}></Route>
      </Routes>
    </Router>
  );
}

export default App;
