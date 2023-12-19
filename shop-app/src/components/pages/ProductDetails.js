import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Details from "../functional/Details";
//Code that renders the project details page
const ProductDetails = () => {
  const [product, setProduct] = useState([])
  //I get the ID from the route/html query
  const {id} = useParams()

  // Fetches the product from the route
  async function fetchProduct(){
    const response = await fetch(`http://localhost:5000/products/${id}`)
    const data = await response.json()
    setProduct(data)
  }

  useEffect(() =>{
    fetchProduct()
  },[])

  // Renders the page
  return (
      <div className="Main_Content_Area">
        <Details product={product}></Details>
      </div>
    );
  };
  
  export default ProductDetails;