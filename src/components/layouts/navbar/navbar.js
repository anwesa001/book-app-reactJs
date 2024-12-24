import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.style.css";
import { CartContext } from "../../../Pages/addtoCart/CartContext";

const Navbar = ({ darkTheme, darkText }) => {
  const { cartItems } = useContext(CartContext);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <section
      className={`navbar-container ${
        darkTheme ? "background-dark relative" : "background-transparent"
      }`}
    >
      <div className="container flex justify-between align-center">
        <a href="#" className="logo">
          Book<span className="text-primary">Nook</span>
        </a>

        <nav className="nav-links-conatiner flex align-center">
          <Link
            to="/"
            className={`${darkText ? "nav-links-dark" : "nav-links"}`}
          >
            Home
          </Link>
          <Link
            to="/books"
            className={`${darkText ? "nav-links-dark" : "nav-links"}`}
          >
            Books
          </Link>
          <Link
            to="/login"
            className={`${darkText ? "nav-links-dark" : "nav-links"}`}
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className={`${darkText ? "nav-links-dark" : "nav-links"}`}
          >
            Sign Up
          </Link>

          <Link to="/cart" className="cart-icon-container">
            <div className="cart-icon-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                alt="Cart Icon"
                className="cart-icon"
              />
              {cartQuantity > 0 && (
                <span className="cart-badge">{cartQuantity}</span>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
