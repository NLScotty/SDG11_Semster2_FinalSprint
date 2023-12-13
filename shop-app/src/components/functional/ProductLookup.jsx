import Product from "./Product";
const ProductLookup = ({data}) => {
    return (
        <div>
            {data.map((product) => (
                <Product product={product} key={product.id}/>
            ))}
        </div>
    );
}

export default ProductLookup;