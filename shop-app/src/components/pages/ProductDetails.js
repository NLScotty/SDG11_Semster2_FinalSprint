import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Details from "../functional/Details";
import useFetch from "../hooks/useFetch";
//Code that renders the project details page
const ProductDetails = () => {
  //I get the ID from the route/html query
  const {id} = useParams()
  const {data, loading, error} = useFetch(`http://localhost:5000/products/${id}`)

  // Renders the page
  if(loading){
    return <div className="Fetch_Message">Fetching Product</div>
  }
  if(error){
    return <div className="Fetch_Message">Error: {error.message}</div>
  }
  return (
      <div className="Main_Content_Area">
        <Details product={data}></Details>
      </div>
    );
  };
  
  export default ProductDetails;