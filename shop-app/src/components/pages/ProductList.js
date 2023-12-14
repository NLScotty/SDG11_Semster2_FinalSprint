import { useState, useEffect } from "react";
import ProductLookup from "../functional/ProductLookup";

const ProductList = () => {
  const [productList, setList] = useState([])
  const cart = JSON.parse(localStorage.getItem("cart" || "[]"))  
  console.log(cart)

  async function fetchProducts(){
    const response = await fetch(`http://localhost:5000/products`)
    const data = await response.json()
    setList(data)
  }

  useEffect(() =>{
    fetchProducts()
  },[])

    return (
      <div>
        The Product List
        <ProductLookup data = {productList}></ProductLookup>
      </div>
    );
  };
  
  export default ProductList;