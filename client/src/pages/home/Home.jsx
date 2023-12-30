import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import "./Home.scss";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import { axiosClient } from "../../utils/axiosClient";

function Home() {
  const [categories, setCategories] = useState(null);
  const [topProducts, setTopProducts] = useState(null);

  async function fethData() {
    const categoryResponse = await axiosClient.get(
      "/categories?populate=image"
    );
    const topProducts = await axiosClient.get(
      "/products?filters[isTopPick][$eq]=true&populate=image"
    );

    setCategories(categoryResponse.data.data);
    setTopProducts(topProducts.data.data);
  }

  useEffect(() => {
    fethData();
  }, []);

  return (
    <div className="home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop by Categories</h2>
          <p className="subheading">shop from the best, our Film and posts</p>

          <div className="content">
            {categories?.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="subheading">shop from the best, our Film and posts</p>

          <div className="content">
            {topProducts?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
