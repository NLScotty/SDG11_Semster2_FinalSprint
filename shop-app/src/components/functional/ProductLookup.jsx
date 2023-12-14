import Product from "./Product";
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