import React, { Component } from "react";
import "./ProductDetail.css";
import heart from "../../../images/icons/icons8-heart-50.png";
import heartFilled from "../../../images/icons/icons8-heart-60.png";
import cart from "../../../images/icons/icons8-shopping-cart-50.png";

class ProductDetail extends Component {
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
    console.log(
      "ProductDetail: Clicking heart for productId:",
      productId,
      "current isLiked:",
      isLiked,
      "newIsLiked:",
      newIsLiked
    );
    if (onToggleWishlist) {
      onToggleWishlist(productId, newIsLiked);
    } else {
      console.error("onToggleWishlist prop is missing");
    }
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
        }, 2000);
      }
    } else {
      console.error("onToggleCart prop is missing");
    }
  };

  render() {
    const {
      productName,
      description,
      price,
      backgroundImage,
      isLiked,
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
    );

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
        </div>
        <div className="content">
          <p>{productName}</p>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
        {/* Notification Popup */}
        {showNotification && (
          <div className="notification-popup">{notificationMessage}</div>
        )}
      </div>
    );
  }
}

export default ProductDetail;
