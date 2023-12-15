const CartDisplay = ({cart, onRemoveItem}) => {
    return (
        <div className="shopping-cart">
            {cart.map((cartItem) => (
                //Might need to play around with this
                <div className="shopping-cart-item">
                    <h2>{cartItem.name}</h2>
                    <p>{cartItem.qty}</p>
                    <p>{cartItem.price}</p>
                    <button onClick={()=>onRemoveItem(cartItem.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default CartDisplay;