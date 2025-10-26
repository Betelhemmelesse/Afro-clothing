import React from "react";
import "./Bracelete.css";
import ProductDetail from "../../Reusable/ProductDetail/ProductDetail.js";

function Bracelete({
  products,
  wishlist,
  onToggleWishlist,
  cart,
  onToggleCart,
}) {
  const braceletsProducts = products.filter(
    (product) => product.category === "bracelets"
  );

  return (
    <div className="bracelets-container">
      <div className="bracelets-top">
        <h1>BRACELETS</h1>
        <p>
          Adorn your wrist with a circlet of style that tells an authentic
          African story.
        </p>
        <div className="bracelets-buttons">
          <div className="bracelets-button">SHOP NOW</div>
          <div className="bracelets-button">ORDER WHOLESALE</div>
        </div>
      </div>
      <div className="card-container">
        {braceletsProducts.map((product) => (
          <ProductDetail
            key={product.id}
            productId={product.id}
            productName={product.productName}
            description={product.description}
            price={product.price}
            backgroundImage={product.backgroundImage}
            isLiked={wishlist.includes(product.id)}
            onToggleWishlist={onToggleWishlist}
            isInCart={cart.includes(product.id)} // New prop
            onToggleCart={onToggleCart} // New prop
          />
        ))}
      </div>
    </div>
  );
}

export default Bracelete;
