import React from "react";
import "./Necklaces.css";
import ProductDetail from "../../Reusable/ProductDetail/ProductDetail";
import { Link } from "react-router-dom";

function Necklaces({
  products,
  wishlist,
  onToggleWishlist,
  cart,
  onToggleCart,
}) {
  const braceletsProducts = products.filter(
    (product) => product.category === "necklaces"
  );

  return (
    <div className="necklaces-container">
      <div className="necklaces-top">
        <h1>NECKLASES</h1>
        <p>
          Drape your décolletage in a centerpiece of African storytelling and
          bold design
        </p>
        <div className="necklaces-buttons">
          <Link to="/shoppingcart">
            <div className="necklaces-button">SHOP NOW</div>
          </Link>
          <Link to="/shoppingcart">
            <div className="necklaces-button">ORDER WHOLESALE</div>
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
            onToggleCart={onToggleCart} // Use global toggle function
            // Placeholder since no detailRoute in data
          />
        ))}
      </div>
    </div>
  );
}

export default Necklaces;
