import React from "react";
import "./Childrend6.css";
import ProductDetail from "../../Reusable/ProductDetail/ProductDetail";

function Childrend6({
  products,
  wishlist,
  onToggleWishlist,
  cart,
  onToggleCart,
}) {
  const braceletsProducts = products.filter(
    (product) => product.category === "childrend6"
  );

  return (
    <div className="mend1-container">
      <div className="detail-description">
        <h1> Modern Africa Kid's Clothings For Your Children</h1>
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

export default Childrend6;
