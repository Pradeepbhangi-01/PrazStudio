import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import dummyImg from "../../assets/banner.jpg";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/loader/Loader.jsx";

function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState();

  async function fetchData() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${params.productId}&populate=*`
    );

    console.log(productResponse);

    if (productResponse.data.data.length > 1) {
      setProduct(productResponse.data.data[0]);
    }
  }

  useEffect(() => {
    setProduct(null);
    fetchData();
  }, [params]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="productDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <div className="img-container">
              <img
                src={product?.attributes.image.data.attributes.url}
                alt="product img"
              />
            </div>
          </div>
          <div className="product-info">
            <h1 className="heading">{product.attributes.title}</h1>
            <h3 className="price"> {product.attributes.price}</h3>
            <p className="description">{product.attributes.desc}</p>
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
