import React from "react";
import "./Earrings.css";
import ProductDetail from "../../Reusable/ProductDetail/ProductDetail";
import { Link } from "react-router-dom";

function Earrings({
  products,
  wishlist,
  onToggleWishlist,
  cart,
  onToggleCart,
}) {
  const braceletsProducts = products.filter(
    (product) => product.category === "earrings"
  );

  return (
    <div className="earrings-container">
      <div className="earrings-top">
        <h1>EARRINGS</h1>
        <p>
          Let your style speak with striking earrings, each pair a vibrant
          whisper of African heritage.
        </p>
        <div className="earrings-buttons">
          <Link to="/shoppingcart">
            <div className="earrings-button">SHOP NOW</div>
          </Link>
          <Link to="/shoppingcart">
            <div className="earrings-button">ORDER WHOLESALE</div>
          </Link>
        </div>
      </div>
      <div className="card-container">
        {braceletsProducts.map((product) => (
          <ProductDetail
            key={product.id} // Use product.id for better performance
            productId={product.id}
            productName={product.productName}
            description={product.description}
            price={product.price}
            backgroundImage={product.backgroundImage}
            isLiked={wishlist.includes(product.id)} // Check if liked in global wishlist
            onToggleWishlist={onToggleWishlist}
            isInCart={cart.includes(product.id)} // New prop
            onToggleCart={onToggleCart} // New prop// Use global toggle function
            // Placeholder since no detailRoute in data
          />
        ))}
      </div>
    </div>
  );
}

export default Earrings;
