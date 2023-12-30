import React from "react";
import dummyCartImg from "../../assets/banner.jpg";
import { FaWindowClose } from "react-icons/fa";
import "./Cartitem.scss";

function Cartitem() {
  return (
    <div className="cartItem">
      <div className="item-img">
        <img src={dummyCartImg} alt="" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <p className="title">Product title here</p>
          <p className="price"> ₹456</p>
          <div className="quantity-selector">
            <span className="btn decrement">-</span>
            <span className="quantity">5</span>
            <span className="btn increment">+</span>
          </div>
          <p className="total-price">Subtotal: ₹6778</p>
        </div>
        <div className="item-remove">
          <FaWindowClose />
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
