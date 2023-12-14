import { Link } from "react-router-dom";

const Product = ({product}) => {
    return(
        <div className="Product_Item">
            <Link to={`/product/${product.id}`}>
            <img src={product.image} width={300} height={250} alt={product.name} ></img>
            <h3>{product.name}</h3>
            </Link>
            <p>Price: {product.price} </p>
        </div>
    )
}

export default Product;