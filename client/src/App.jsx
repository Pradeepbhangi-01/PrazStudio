import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category/:categoryId?" element={<Collection />}></Route>

          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
