import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/cart">Shopping Cart</Link>
      <Link to="/list">Product List</Link>
      <Link to="/check">Check Out</Link>
    </div>
  );
};

export default NavBar;
