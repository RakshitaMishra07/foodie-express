// src/components/CartPopup.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPopup.css';

const CartPopup = ({ onClose }) => {
  const { cart, clearCart } = useCart();

  // Calculate total price
  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace('₹', ''));
      return total + price;
    }, 0);
  };

  // Handle Checkout
  const handleCheckout = () => {
    if (window.confirm("Do you want to place the order?")) {
      alert("Order placed successfully!");
      clearCart(); // Clear the cart
      onClose();   // Close the popup
    }
  };

  return (
    <div className="cart-popup">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <p className="total">Total: ₹{getTotal()}</p>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
      <button className="close-btn" onClick={onClose}>Close</button>
    </div>
  );
};

export default CartPopup;