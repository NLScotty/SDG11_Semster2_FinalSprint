import React, { useContext, useState } from 'react';
import './Checkout.css';
import { ShoppingCartContext } from './ShoppingCartContext';

const Checkout = () => {
    const { cartItems, total, clearCart } = useContext(ShoppingCartContext);
    const [formData, setFormData] = useState({ name: '', address: '', creditCard: '' });
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the payment and order placement process
        console.log('Checkout data:', formData, 'Cart Items:', cartItems);
        setOrderPlaced(true);
        clearCart(); // Clear the cart after placing the order
    };

    if (orderPlaced) {
        return <div className="checkout-success">Thank you for your order, {formData.name}!</div>;
    }

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                {/* Form Fields */}
                {/* ... */}

                <button type="submit">Submit Order</button>
            </form>

            <div className="order-summary">
                <h3>Order Summary</h3>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>{item.name} - ${item.price}</li>
                    ))}
                </ul>
                <p>Total Amount: ${total}</p>
            </div>
        </div>
    );
};

export default Checkout;
