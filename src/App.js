import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Women from "./components/Women/Women";
import Men from "./components/Men/Men";
import Children from "./components/Children/Children";
import Bracelete from "./components/Accessories/Bracelet/Bracelete";
import Earrings from "./components/Accessories/Earrings/Earrings";
import Necklaces from "./components/Accessories/Necklaces/Necklaces";
import Mend1 from "./components/Men/Mend1/Mend1";
import Mend2 from "./components/Men/Mend2/Mend2";
import Mend3 from "./components/Men/Mend3/Mend3";
import Mend4 from "./components/Men/Mend4/Mend4";
import Mend5 from "./components/Men/Mend5/Mend5";
import Mend6 from "./components/Men/Mend6/Mend6";
import Women1 from "./components/Women/Womend1/Womend1";
import Women2 from "./components/Women/Womend2/Womend2";
import Women3 from "./components/Women/Womend3/Womend3";
import Women4 from "./components/Women/Womend4/Womend4";
import Women5 from "./components/Women/Womend5/Womend5";
import Women6 from "./components/Women/Womend6/Womend6";
import Children1 from "./components/Children/Childrend1/Childrend1";
import Childrend2 from "./components/Children/Childrend2/Childrend2";
import Childrend3 from "./components/Children/Childrend3/Childrend3";
import Childrend4 from "./components/Children/Childrend4/Childrend4";
import Childrend5 from "./components/Children/Childrend5/Childrend5";
import Childrend6 from "./components/Children/Childrend6/Childrend6";
import WishList from "./components/WishList/WishList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Profile from "./components/Profile/Profile";

// Import the centralized products data
import products from "./data/Products";

function App() {
  // Global wishlist state: array of product IDs
  const [wishlist, setWishlist] = useState([]);

  const [cart, setCart] = useState([]);

  // Function to toggle wishlist (add/remove product ID)
  const handleToggleWishlist = (productId, isLiked) => {
    setWishlist((prevWishlist) => {
      if (isLiked) {
        // Add to wishlist if not already present
        return prevWishlist.includes(productId)
          ? prevWishlist
          : [...prevWishlist, productId];
      } else {
        // Remove from wishlist
        return prevWishlist.filter((id) => id !== productId);
      }
    });
  };

  // Function to toggle cart (add/remove product ID)
  const handleToggleCart = (productId, isInCart) => {
    setCart((prevCart) => {
      if (isInCart) {
        return prevCart.includes(productId)
          ? prevCart
          : [...prevCart, productId];
      } else {
        return prevCart.filter((id) => id !== productId);
      }
    });
  };

  // No need for a local products array—it's imported from products.js

  return (
    <Router>
      <div>
        <Header cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Pass products, wishlist, and onToggleWishlist to category pages */}
          <Route
            path="/women"
            element={
              <Women
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/men"
            element={
              <Men
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/children"
            element={
              <Children
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/braceletes"
            element={
              <Bracelete
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/earrings"
            element={
              <Earrings
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/necklaces"
            element={
              <Necklaces
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          {/* Detail pages remain unchanged (no products needed here) */}
          <Route
            path="/mend1"
            element={
              <Mend1
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/mend2"
            element={
              <Mend2
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/mend3"
            element={
              <Mend3
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/mend4"
            element={
              <Mend4
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/mend5"
            element={
              <Mend5
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/mend6"
            element={
              <Mend6
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/womend1"
            element={
              <Women1
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/womend2"
            element={
              <Women2
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/womend3"
            element={
              <Women3
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/womend4"
            element={
              <Women4
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/womend5"
            element={
              <Women5
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/womend6"
            element={
              <Women6
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/children1"
            element={
              <Children1
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/children2"
            element={
              <Childrend2
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/children3"
            element={
              <Childrend3
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/children4"
            element={
              <Childrend4
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/children5"
            element={
              <Childrend5
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route
            path="/children6"
            element={
              <Childrend6
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          {/* Pass products to WishList */}
          <Route
            path="/wishlist"
            element={
              <WishList
                products={products}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
              />
            }
          />
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCart
                products={products}
                cart={cart}
                onToggleCart={handleToggleCart}
              />
            }
          />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
