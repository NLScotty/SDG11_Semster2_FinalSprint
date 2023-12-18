import { Link } from "react-router-dom";
const NavBar = () => {
  function displayOverlay(){
    let overlay = document.querySelector('.Mobile_Nav_Menu_Content');
    if(overlay.style.display === "none"){
      overlay.style.display = "block";
    }else{
      overlay.style.display = "none";
    }
  }
  return (
    <>
    <div className="Desktop_Nav_Bar">
      <div className="Desktop_Nav_Bar_Banner">
        <h1>Curious Car and Automobiles</h1>
      </div>
      <div className="Desktop_Nav_Bar_Wrapper"><Link to="/"><div className="Desktop_Nav_Bar_Button"><h3>Home</h3></div></Link></div>
      <div className="Desktop_Nav_Bar_Wrapper"><Link to="/cart"><div className="Desktop_Nav_Bar_Button"><h3>Shopping Cart</h3></div></Link></div>
      <div className="Desktop_Nav_Bar_Wrapper"><Link to="/list"><div className="Desktop_Nav_Bar_Button"><h3>Product List</h3></div></Link></div>
      <div className="Desktop_Nav_Bar_Wrapper"><Link to="/check"><div className="Desktop_Nav_Bar_Button"><h3>Check Out</h3></div></Link></div>
    </div>
    <div className='Mobile_Nav_Bar'>
      <div className="Mobile_Nav_Dropdown_Menu">
        <div className="Mobile_Nav_Menu_Button" onClick={displayOverlay}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="Mobile_Nav_Menu_Content">
          <div className="Mobile_Nav_Bar_Wrapper"><Link to="/"><div className="Mobile_Nav_Bar_Button"><h3>Home</h3></div></Link></div>
          <div className="Mobile_Nav_Bar_Wrapper"><Link to="/cart"><div className="Mobile_Nav_Bar_Button"><h3>Shopping Cart</h3></div></Link></div>
          <div className="Mobile_Nav_Bar_Wrapper"><Link to="/list"><div className="Mobile_Nav_Bar_Button"><h3>Product List</h3></div></Link></div>
          <div className="Mobile_Nav_Bar_Wrapper"><Link to="/check"><div className="Mobile_Nav_Bar_Button"><h3>Check Out</h3></div></Link></div>
        </div>
      </div>
      <div className="Mobile_Nav_Bar_Header">
        <label>Curious Car and Automobiles</label>
      </div>
    </div>
    </>
  );
};

export default NavBar;
