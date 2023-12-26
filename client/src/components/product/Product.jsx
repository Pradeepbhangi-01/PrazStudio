import React from "react";
import "./Product.scss";
import dummyImg from "../../assets/banner.jpg";

function Product() {
  return (
    <div className="product">
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img src={dummyImg} alt="" id="img" />
          </div>
        </div>
        <div className="product-info">
          <p className="title">RTR 160</p>
          <p className="price">₹ 150000</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
