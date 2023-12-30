import React from "react";
import { FaWindowClose } from "react-icons/fa";
import "./Cart.scss";
import Cartitem from "../cartItem/Cartitem";

function Cart({ onClose }) {
  return (
    <div className="cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shopping Cart</h3>
          <div className="close-btn" onClick={onClose}>
            <FaWindowClose />
            Close
          </div>
        </div>
        <div className="cart-items">
          <Cartitem />
          <Cartitem />
          <Cartitem />
        </div>

        <div className="checkout-info">
          <div className="total-amount">
            <h3 className="total-message">Total:</h3>
            <h3 className="total-value">₹4567</h3>
          </div>
          <div className="checkout btn-primary">Checkout now</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
