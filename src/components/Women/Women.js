import React from "react";
import "./Women.css";
import ProductCard from "../Reusable/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Women({ products, wishlist, onToggleWishlist, cart, onToggleCart }) {
  // Add props
  const navigate = useNavigate();
  const menProducts = products.filter(
    (product) => product.category === "women"
  );

  return (
    <div className="women-container">
      <div className="women-top">
        <h1>WOMEN CLOTHINGS</h1>
        <p>
          Our women's collection features the boldest prints of West Africa, the
          refined elegance of North Africa, and the graceful drape of East
          Africa, all tailored for today.
        </p>
        <div className="women-buttons">
          <Link to="/shoppingcart">
            <div className="women-button"> SHOP NOW</div>
          </Link>
          <Link to="/shoppingcart">
            <div className="women-button">ORDER WHOLESALE</div>
          </Link>
        </div>
      </div>
      <div className="card-container">
        {menProducts.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            productName={product.productName}
            description={product.description}
            price={product.price}
            backgroundImage={product.backgroundImage}
            isLiked={wishlist.includes(product.id)} // Add this
            onToggleWishlist={onToggleWishlist} // Add this
            onSelectOption={() => navigate(product.detailRoute)}
            isInCart={cart.includes(product.id)} // New prop
            onToggleCart={onToggleCart}
            // Use detailRoute from data
          />
        ))}
      </div>
    </div>
  );
}

export default Women;
