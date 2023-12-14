import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Details from "../functional/Details";

const ProductDetails = () => {
  const [product, setProduct] = useState([])

  const {id} = useParams()

  async function fetchProduct(){
    const response = await fetch(`http://localhost:5000/products/${id}`)
    const data = await response.json()
    setProduct(data)
  }

  useEffect(() =>{
    fetchProduct()
  },[])

  return (
      <div className="Main_Content_Area">
        <Details product={product}></Details>
      </div>
    );
  };
  
  export default ProductDetails;