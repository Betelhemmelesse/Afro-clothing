import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../../images/icons/logo2.png";
import profile from "../../images/icons/icons8-customer-64.png";
import wishlist from "../../images/icons/icons8-heart-50.png";
import shopping_cart from "../../images/icons/icons8-shopping-cart-50.png";
import "./Header.css";

function Header({ cartCount = 0 }) {
  return (
    <div className="container">
      <div className="left">
        <ul>
          <li>
            CLOTHING
            <ul className="dropdown">
              <li>
                {/* Link to Women page */}
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/men">Men</Link>
              </li>{" "}
              {/* You can add Links for these later */}
              <li>
                <Link to="/children">Children</Link>
              </li>
            </ul>
          </li>
          <li>
            ACCESSORIES
            <ul className="dropdown">
              <li>
                <Link to="/braceletes">Bracelets</Link>
              </li>{" "}
              <li>
                <Link to="/earrings">Earrings</Link>
              </li>
              <li>
                <Link to="/necklaces">Necklases</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="logo">
        <img src={logo} alt="Site Logo" />
      </div>
      <div className="right">
        <Link to="/profile">
          <img src={profile} alt="User Profile" className="profile" />
        </Link>
        <Link to="/wishlist">
          <img src={wishlist} alt="Wishlist" className="heart" />{" "}
        </Link>
        <Link to="/shoppingcart" className="cart-link">
          {" "}
          {/* Added className for styling */}
          <img src={shopping_cart} alt="Shopping Cart" />
          {cartCount > 0 && ( // Conditionally render badge only if count > 0
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Header;
