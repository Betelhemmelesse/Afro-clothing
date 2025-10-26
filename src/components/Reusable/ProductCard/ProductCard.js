import React, { Component } from "react";
import "./ProductCard.css"; // Import the updated CSS
import heart from "../../../images/icons/icons8-heart-50.png";
import heartFilled from "../../../images/icons/icons8-heart-60.png";
import cart from "../../../images/icons/icons8-shopping-cart-50.png";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: false,
      notificationMessage: "",
    };
  }
  handleWishlistClick = () => {
    const { isLiked, productId, onToggleWishlist } = this.props;
    const newIsLiked = !isLiked;
    if (onToggleWishlist) {
      onToggleWishlist(productId, newIsLiked);
    }
    console.log(newIsLiked ? "Added to wishlist" : "Removed from wishlist");
  };

  handleCartClick = () => {
    const { isInCart, productId, onToggleCart } = this.props;
    const newIsInCart = !isInCart;
    console.log(
      "ProductDetail: Clicking cart for productId:",
      productId,
      "current isInCart:",
      isInCart,
      "newIsInCart:",
      newIsInCart
    );
    if (onToggleCart) {
      onToggleCart(productId, newIsInCart);
      // Show notification only when adding to cart
      if (newIsInCart) {
        this.setState({
          showNotification: true,
          notificationMessage: "Added to Cart!",
        });
        // Hide notification after 3 seconds
        setTimeout(() => {
          this.setState({ showNotification: false });
        }, 3000);
      }
    } else {
      console.error("onToggleCart prop is missing");
    }
  };

  handleSelectOption = () => {
    if (this.props.onSelectOption) {
      this.props.onSelectOption(); // Call the prop function to navigate
    } else {
      console.log("No navigation function provided");
    }
  };

  render() {
    const {
      productName,
      description,
      price,
      backgroundImage,
      isLiked,
      showSelectButton = true,
      isInCart,
    } = this.props;
    const { showNotification, notificationMessage } = this.state;
    console.log(
      "ProductDetail render: productId:",
      this.props.productId,
      "isLiked:",
      isLiked,
      "isInCart:",
      isInCart
    ); // Default to true

    return (
      <div className="product-card">
        <div
          className="img-container"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="action-icons">
            <img
              src={isLiked ? heartFilled : heart}
              alt="Wishlist"
              onClick={this.handleWishlistClick}
              className="icon"
            />
            <img
              src={cart}
              alt="Add to Cart"
              onClick={this.handleCartClick}
              className="icon"
            />
          </div>
          {showSelectButton && ( // Conditionally render the select button
            <div className="select-button">
              <button onClick={this.handleSelectOption}>Select Option</button>
            </div>
          )}
        </div>
        <div className="content">
          <p>{productName}</p>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
        {showNotification && (
          <div className="notification-popup">{notificationMessage}</div>
        )}
      </div>
    );
  }
}

export default ProductCard;
