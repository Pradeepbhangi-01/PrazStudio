import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { BsCart2 } from "react-icons/bs";
import Cart from "../cart/Cart";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <nav className="Navbar">
        <div className="container nav-container">
          <div className="nav-left">
            <ul className="link-group">
              <li className="hover-link">
                <Link className="link" to="/products?category=photos">
                  photos
                </Link>
              </li>
              <li className="hover-link">
                <Link className="link" to="/products?category=videos">
                  videos
                </Link>
              </li>
              <li className="hover-link">
                <Link className="link" to="/products?category=album">
                  album
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-center">
            <Link to="/">
              <h1 className="banner">PrazStudio</h1>
            </Link>
          </div>
          <div
            className="nav-right hover-link "
            onClick={() => setOpenCart(!openCart)}
          >
            <div className="nav-cart">
              <BsCart2 className="icon" />
              <span className="cart-count center">99</span>
            </div>
          </div>
        </div>
      </nav>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </>
  );
}

export default Navbar;
