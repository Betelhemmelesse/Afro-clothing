import React from "react";
import "./Children.css";
import ProductCard from "../Reusable/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Children({
  products,
  wishlist,
  onToggleWishlist,
  cart,
  onToggleCart,
}) {
  // Receive props from App.js
  const navigate = useNavigate();

  // Filter products to show only children's items
  const childrenProducts = products.filter(
    (product) => product.category === "children"
  );

  return (
    <div className="children-container">
      <div className="children-top">
        <h1>CHILDREN CLOTHINGS</h1>
        <p>
          Bright prints and bold colours! Our children's collection captures the
          joyful style of Africa, from West to East, North to South, ready for
          every adventure.
        </p>
        <div className="children-buttons">
          <Link to="/shoppingcart">
            <div className="children-button">SHOP NOW</div>
          </Link>
          <Link to="/shoppingcart">
            <div className="children-button">ORDER WHOLESALE</div>
          </Link>
        </div>
      </div>
      <div className="card-container">
        {childrenProducts.map((product) => (
          <ProductCard
            key={product.id} // Use product.id for better performance
            productId={product.id}
            productName={product.productName}
            description={product.description}
            price={product.price}
            backgroundImage={product.backgroundImage}
            isLiked={wishlist.includes(product.id)} // Check if liked in global wishlist
            onToggleWishlist={onToggleWishlist} // Use global toggle function
            onSelectOption={() => navigate(product.detailRoute)}
            isInCart={cart.includes(product.id)} // New prop
            onToggleCart={onToggleCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Children;
