import React from "react";
import "./ProductDetail.scss";
import dummyImg from "../../assets/banner.jpg";

function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <img src={dummyImg} alt="product img" />
          </div>
          <div className="product-info">
            <h1 className="heading">This is Wall Poster</h1>
            <h3 className="price"> 234</h3>
            <p className="description">
              osnclac jnckaccm djnclnadkdc .kdcdacakd jdcneqdbqewck hclk knw
              encalknckaekmwb
            </p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span className="btn decrement">-</span>
                <span className="quantity">5</span>
                <span className="btn increment">+</span>
              </div>
              <button className="btn-primary add-to-cart">Add to cart</button>
            </div>

            <div className="return-policy">
              <ul>
                <li>Ihsjakdmqjbsokdoefwdkf cjdeofk</li>
                <li>Ihsjakdmqjbsokdoefwdkf cjdeofk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
