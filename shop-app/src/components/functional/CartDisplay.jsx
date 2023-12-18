const CartDisplay = ({cart, onRemoveItem}) => {
    function sumOfCart(){
        var sum = 0
        cart.forEach((item) =>{
            sum = sum += (item.price*item.qty)
        })
        return sum
    }
    return (
        <div className="shopping-cart">
            <table className="shopping-cart-table">
                <tr>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Product Price</th>
                    <th>Total Price</th>
                    <th>Delete</th>
                </tr>
                {cart.map((cartItem) => (
                    //Might need to play around with this
                    <tr>
                        <td>{cartItem.name}</td>
                        <td>{cartItem.qty}</td>
                        <td>${cartItem.price}</td>
                        <td>${cartItem.price * cartItem.qty}</td>
                        <td><button onClick={()=>onRemoveItem(cartItem.id)}>Remove</button></td>
                    </tr>
                ))}
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Order Total:</th>
                    <th>${sumOfCart()}</th>
                </tr>
            </table>
        </div>
    );
}

export default CartDisplay;