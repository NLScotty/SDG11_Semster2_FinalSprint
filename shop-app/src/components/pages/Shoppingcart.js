import CartDisplay from '../functional/CartDisplay';
import useLocalStorage from '../hooks/useLocalStorage'; // Adjust path as necessary
import '../../ShoppingCart.css'

export const ShoppingCartProvider = () => {
    const [cartItems, setCartItems] = useLocalStorage("cart");
 
    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };
 
    return(
        <CartDisplay cart={cartItems} onRemoveItem={removeFromCart}></CartDisplay>
    );
};
