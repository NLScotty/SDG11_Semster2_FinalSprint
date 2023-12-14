import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="Desktop_Nav_Bar">
      <div className="Desktop_Nav_Bar_Banner">
        <h1>Curious Car and Automobiles</h1>
      </div>
      <div className="Desktop_Nav_Bar_Wrapper"><Link to="/"><div className="Desktop_Nav_Bar_Button"><h3>Home</h3></div></Link></div>
      <div className="Desktop_Nav_Bar_Wrapper"><Link to="/cart"><div className="Desktop_Nav_Bar_Button"><h3>Shopping Cart</h3></div></Link></div>
      <div className="Desktop_Nav_Bar_Wrapper"><Link to="/list"><div className="Desktop_Nav_Bar_Button"><h3>Product List</h3></div></Link></div>
      <div className="Desktop_Nav_Bar_Wrapper"><Link to="/check"><div className="Desktop_Nav_Bar_Button"><h3>Check Out</h3></div></Link></div>
    </div>
  );
};

export default NavBar;
