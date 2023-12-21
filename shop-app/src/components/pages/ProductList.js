import { useState, useEffect } from "react";
import ProductLookup from "../functional/ProductLookup";
import useFetch from "../hooks/useFetch";
// Renders the Product List page
const ProductList = () => {
  //const [productList, setList] = useState([])
  const {data, loading, error} = useFetch(`http://localhost:5000/products`)
  // Code only for testing purposes
  /*
  const cart = JSON.parse(localStorage.getItem("cart" || "[]"))  
  console.log(JSON.stringify(cart))
  */
    if(loading) return <div className="Fetch_Message">Fetching Products from Database...</div>
    if(error) return <div className="Fetch_Message">Error: {error.message}</div>
    return (
      <div className="Main_Content_Area">
        <ProductLookup data = {data}></ProductLookup>
      </div>
    );
  };
  
  export default ProductList;