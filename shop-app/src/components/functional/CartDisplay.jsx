const CartDisplay = ({cart}) => {
    return (
        <div className="Product_Gallery">
            {cart.map((cartItem) => (
                <>
                    <p>{cartItem.name}</p>
                    <p>{cartItem.price}</p>
                </>
            ))}
        </div>
    );
}

export default CartDisplay;