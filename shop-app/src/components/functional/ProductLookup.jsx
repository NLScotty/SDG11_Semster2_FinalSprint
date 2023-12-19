import Product from "./Product";
// An Element that consists of many products
const ProductLookup = ({data}) => {
    return (
        <div className="Product_Gallery">
            {data.map((product) => (
                <Product product={product} key={product.id}/>
            ))}
        </div>
    );
}

export default ProductLookup;