import React, { useEffect, useState } from "react";
import "./Categories.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const params = useParams();

  const [categoryId, setCategoryId] = useState("");
  const categoryList = [
    {
      id: "albums",
      value: "albums",
    },
    {
      id: "photos",
      value: "photos",
    },
    {
      id: "videos",
      value: "videos",
    },
  ];

  function updateCategory(e) {
    navigate(`/categories/${e.target.value}`);
  }

  useEffect(() => {
    setCategoryId(params.categoryId);
  }, [params]);

  return (
    <div className="categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore the possibilities</h2>
            <p>Indias best Selling bike</p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">Sort By</h3>
              <select name="sort-by" id="sort-by" className="select-sort-by">
                <option value="relevance">Relevance</option>
                <option value="newest-first">Newest First</option>
                <option value="price-lth">Price~ low to High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categoryList.map((item) => (
                <div key={item.id} className="filter-radio">
                  <input
                    name="category"
                    type="radio"
                    id={item.id}
                    value={item.id}
                    onChange={updateCategory}
                    checked={item.id == categoryId}
                  />
                  <label htmlFor={item.id}>{item.value}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="products-box">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
