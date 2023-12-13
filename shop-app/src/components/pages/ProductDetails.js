import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Product from "../functional/Product";

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
      <div>
        <p>A Product Page</p>
        <Product product={product}></Product>
      </div>
    );
  };
  
  export default ProductDetails;