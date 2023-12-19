import { useState, useEffect } from "react";
import ProductLookup from "../functional/ProductLookup";
// Renders the Product List page
const ProductList = () => {
  const [productList, setList] = useState([])
  // Code only for testing purposes
  /*
  const cart = JSON.parse(localStorage.getItem("cart" || "[]"))  
  console.log(JSON.stringify(cart))
  */

  // A function that fetches from our API
  async function fetchProducts(){
    const response = await fetch(`http://localhost:5000/products`)
    const data = await response.json()
    setList(data)
  }

  useEffect(() =>{
    fetchProducts()
  },[])

    return (
      <div className="Main_Content_Area">
        <ProductLookup data = {productList}></ProductLookup>
      </div>
    );
  };
  
  export default ProductList;