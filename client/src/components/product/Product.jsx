import React from "react";
import "./Product.scss";
import dummyImg from "../../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();
  return (
    <div
      className="product"
      onClick={() => navigate(`/products/${product?.attributes.key}`)}
    >
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img
              src={product?.attributes.image.data.attributes.url}
              alt="product img"
              id="img"
            />
          </div>
        </div>
        <div className="product-info">
          <p className="title">{product?.attributes.title}</p>
          <p className="price">₹{product?.attributes.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
