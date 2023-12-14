import { Link } from "react-router-dom";

const Product = ({product}) => {
    return(
        <div className="Product_Gallery_Item">
            <Link to={`/product/${product.id}`}>
            <div className="Gallery_Image_Container">
                <img src={product.image} alt={product.name} ></img>
            </div>
            <h3 className="Gallery_Product_Name">{product.name}</h3>
            </Link>
            <p className="Gallery_Product_Price">Price: {product.price} </p>
        </div>
    )
}

export default Product;