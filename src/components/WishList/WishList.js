import React, { Component } from "react";
import ProductCard from "../Reusable/ProductCard/ProductCard";
import "./WishList.css";

class WishList extends Component {
  render() {
    const { wishlist, products, onToggleWishlist } = this.props;

    const likedProducts = products.filter((product) =>
      wishlist.includes(product.id)
    );

    return (
      <div className="wishlist-page">
        <h1>My Wishlist</h1>
        {likedProducts.length > 0 ? (
          <div className="wishlist-container">
            {likedProducts.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                productName={product.productName}
                description={product.description}
                price={product.price}
                backgroundImage={product.backgroundImage}
                isLiked={true} // Always true since these are liked products
                onToggleWishlist={onToggleWishlist} // Allow toggling off
                showSelectButton={false} // Hide the select button
                onSelectOption={() => console.log("Navigate to product detail")} // Still pass it, but it won't render
              />
            ))}
          </div>
        ) : (
          <p>Your wishlist is empty. Start adding some products!</p>
        )}
      </div>
    );
  }
}

export default WishList;
