import React, { Component } from "react";
import ProductCard from "../Reusable/ProductCard/ProductCard";
import "./ShoppingCart.css";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPaymentModal: false,
      selectedPaymentMethod: "",
      accountNumber: "",
      amount: "",
    };
  }

  handleRemoveFromCart = (productId) => {
    const { onToggleCart } = this.props;
    onToggleCart(productId, false); // Remove from cart
  };

  handlePaymentClick = (method) => {
    this.setState({ showPaymentModal: true, selectedPaymentMethod: method });
  };

  handleModalClose = () => {
    this.setState({ showPaymentModal: false, accountNumber: "", amount: "" });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePaymentSubmit = (e) => {
    e.preventDefault();
    const { selectedPaymentMethod, accountNumber, amount } = this.state;
    // Demo: Log the payment details
    console.log(
      `Payment Method: ${selectedPaymentMethod}, Account: ${accountNumber}, Amount: ${amount}`
    );
    alert(`Payment submitted for ${selectedPaymentMethod}! (Demo)`);
    this.handleModalClose();
  };

  render() {
    const { cart, products } = this.props;
    const { showPaymentModal, selectedPaymentMethod, accountNumber, amount } =
      this.state;

    const cartProducts = products.filter((product) =>
      cart.includes(product.id)
    );

    // Calculate total quantity and price
    const totalQuantity = cartProducts.length;
    const totalPrice = cartProducts
      .reduce((sum, product) => {
        const price = parseFloat(product.price.replace("$", ""));
        return sum + price;
      }, 0)
      .toFixed(2);

    return (
      <div className="shoppingcart-page">
        <h1>My Shopping Cart</h1>
        {cartProducts.length > 0 ? (
          <>
            <div className="cart-container">
              {cartProducts.map((product) => (
                <div key={product.id} className="cart-item">
                  <ProductCard
                    productId={product.id}
                    productName={product.productName}
                    description={product.description}
                    price={product.price}
                    backgroundImage={product.backgroundImage}
                    isLiked={false}
                    onToggleWishlist={() => {}}
                    showSelectButton={false}
                    onSelectOption={() =>
                      console.log("Navigate to product detail")
                    }
                  />
                  <button
                    className="remove-button"
                    onClick={() => this.handleRemoveFromCart(product.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="summary-details">
                <p>Total Items: {totalQuantity}</p>
                <p>Total Price: ${totalPrice}</p>
              </div>
              <div className="right-cart">
                <h3>Choose Payment Method</h3>
                <div className="payment-options">
                  <button
                    className="payment-button paypal"
                    onClick={() => this.handlePaymentClick("PayPal")}
                  >
                    Pay with PayPal
                  </button>
                  <button
                    className="payment-button google-pay"
                    onClick={() => this.handlePaymentClick("Google Pay")}
                  >
                    Pay with Google Pay
                  </button>
                  <button
                    className="payment-button cbe"
                    onClick={() => this.handlePaymentClick("CBE")}
                  >
                    Pay with CBE
                  </button>
                  <button
                    className="payment-button other"
                    onClick={() => this.handlePaymentClick("Other")}
                  >
                    Other Payment Options
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Your cart is empty. Start adding some products!</p>
        )}

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Enter Payment Details for {selectedPaymentMethod}</h2>
              <form onSubmit={this.handlePaymentSubmit}>
                <label>
                  Account Number:
                  <input
                    type="text"
                    name="accountNumber"
                    value={accountNumber}
                    onChange={this.handleInputChange}
                    required
                  />
                </label>
                <label>
                  Total Amount ($):
                  <input
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={this.handleInputChange}
                    min="0"
                    step="0.01"
                    required
                  />
                </label>
                <button type="submit" className="submit-button">
                  Submit Payment
                </button>
                <button
                  type="button"
                  onClick={this.handleModalClose}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
