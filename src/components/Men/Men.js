import React from "react";
import "./Men.css";
import ProductCard from "../Reusable/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom"; // Already imported
import { Link } from "react-router-dom";

function Men({ products, wishlist, onToggleWishlist, cart, onToggleCart }) {
  // Add props
  const navigate = useNavigate();
  const menProducts = products.filter((product) => product.category === "men");

  return (
    <div className="men-container">
      <div className="men-top">
        <h1>MEN CLOTHINGS</h1>
        <p>
          Explore African menswear, where the distinguished culture of the West
          meets the sleek sophistication of the North and the timeless style of
          the East, all redefined for today.
        </p>
        <div className="men-buttons">
          <Link to="/shoppingcart">
            <div className="men-button">SHOP NOW</div>
          </Link>
          <Link to="/shoppingcart">
            <div className="men-button">ORDER WHOLESALE</div>
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
            onToggleCart={onToggleCart} // Use detailRoute from data
          />
        ))}
      </div>
    </div>
  );
}

export default Men;
