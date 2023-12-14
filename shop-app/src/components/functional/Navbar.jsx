import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="Desktop_Nav_Bar">
      <div className="Desktop_Nav_Bar_Banner">
        <h1>Curious Car and Automobiles</h1>
      </div>
      <Link to="/"><div className="Desktop_Nav_Bar_Button">Home</div></Link>
      <Link to="/cart"><div className="Desktop_Nav_Bar_Button">Shopping Cart</div></Link>
      <Link to="/list"><div className="Desktop_Nav_Bar_Button">Product List</div></Link>
      <Link to="/check"><div className="Desktop_Nav_Bar_Button">Check Out</div></Link>
    </div>
  );
};

export default NavBar;
