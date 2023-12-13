const Product = ({product}) => {
    return(
        <div>
            <h3>{product.name}</h3>
            <p>ID: {product.id} </p>
            <p>Description: {product.description} </p>
            <p>Price: {product.price} </p>
            <img src={product.image} width={300} height={300} alt={product.name}></img>
        </div>
    )
}

export default Product;