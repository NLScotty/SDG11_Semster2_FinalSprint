import { Link } from "react-router-dom";
const Home = () => {
    return (
      <div className="Home_Page_Back_Drop">
        <div className="Home_Page_Banner_Outter">
          <div className="Home_Page_Banner_Inner">
            <h1>Happy Holidays!</h1>
            <h2>Tis the season to put one of our collectable cars under the tree</h2>
            <Link to="/list">
              <div className="Home_Page_Button">Click here to browse</div>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;