import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/functional/Navbar";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<p>Index Page</p>}></Route>
        <Route path="/list" element={<p>Product List</p>}></Route>
        <Route path="/cart" element={<p>Shopping Cart Page</p>}></Route>
        <Route path="/check" element={<p>Check Out Page</p>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
