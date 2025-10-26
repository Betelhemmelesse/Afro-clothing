import React, { useState } from "react";
import "./Footer.css";
import shipping from "../../images/icons/icons8-free-shipping-100.png";
import onlinepayment from "../../images/icons/onlinepay.png";
import safe from "../../images/icons/safe.png";
import returnn from "../../images/icons/return.png";
import logo from "../../images/icons/logo2.png";
import location from "../../images/icons/icons8-location-50 (1).png";
import phone from "../../images/icons/icons8-phone-50.png";
import emaill from "../../images/icons/icons8-mail-50 (1).png";

function Footer() {
  // Separate state for sign-in
  // const [signInName, setSignInName] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInError, setSignInError] = useState("");

  // Separate state for sign-up
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");

  // State to toggle between sign-in and sign-up
  const [isSignUp, setIsSignUp] = useState(false); // false = show sign-in, true = show sign-up

  // State to control form visibility
  const [showForm, setShowForm] = useState(false); // false = hide forms, true = show selected form

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (signInPassword.length <= 8) {
      setSignInError("Password must be more than 8 characters.");
      return;
    }
    setSignInError("");
    // Store user data in localStorage after successful sign-in
    const userData = {
      email: signInEmail,
      profilePicture: null, // Placeholder; can be updated in Profile page
    };
    localStorage.setItem("user", JSON.stringify(userData));
    // Handle sign-in logic here (e.g., redirect or show success message)
    console.log("Sign In:", userData);
    alert("Sign In successful!"); // Temporary alert; replace with proper navigation
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signUpPassword.length <= 8) {
      setSignUpError("Password must be more than 8 characters.");
      return;
    }
    setSignUpError("");
    // Store user data in localStorage after successful sign-up
    const userData = {
      name: signUpName,
      email: signUpEmail,
      profilePicture: null, // Placeholder; can be updated in Profile page
    };
    localStorage.setItem("user", JSON.stringify(userData));
    // Handle sign-up logic here (e.g., redirect or show success message)
    console.log("Sign Up:", userData);
    alert("Sign Up successful!"); // Temporary alert; replace with proper navigation
  };

  return (
    <div className="footer-container">
      {" "}
      {/* Changed from "container" */}
      <div className="footer-top">
        {" "}
        {/* Changed from "top" */}
        <div className="img-des">
          <img src={shipping} alt="" />
          <h2>SECURE SHIPPING</h2>
          <p>DHS ,UPL</p>
        </div>
        <div className="img-des">
          <img src={onlinepayment} alt="" />
          <h2>ONLINE PAYMENT</h2>
          <p>paypal,creadit card</p>
        </div>
        <div className="img-des">
          <img src={safe} alt="" />
          <h2>100% SAFE</h2>
          <p>View our benefits</p>
        </div>
        <div className="img-des">
          <img src={returnn} alt="" />
          <h2>RETURN</h2>
          <p>Track orders</p>
        </div>
      </div>
      <div className="footer-center">
        {" "}
        {/* Changed from "center" */}
        <div className="footer-left">
          {" "}
          {/* Changed from "left" */}
          <img src={logo} alt="" />
          <p>
            Shop quality wholesale African Print Clothing and accessories at
            affordable price for you online store,proudly made in Africa{" "}
          </p>
          <ul className="footer-left-li">
            {" "}
            <li>
              <img src={location} alt="" />
              <p>Ethiopia|Kenya|Nigeria</p>
            </li>
            <li>
              <img src={phone} alt="" />
              <p>Phone:+251913816595</p>
            </li>
            <li>
              <img src={emaill} alt="" />
              <p>afroclothing@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          {" "}
          {/* Changed from "right" */}
          <div className="ul-container">
            {" "}
            <h2>OUR SERVICE</h2>
            <ul>
              <li>wholesale</li>
              <li>Custom made</li>
              <li>Start up bundlee</li>
              <li>distributor</li>
              <li>private label</li>
            </ul>
          </div>
          <div className="ul-container">
            {" "}
            <h2>CUSTOMER CARE</h2>
            <ul>
              <li> PRIVACY POLICY</li>
              <li>Return</li>
              <li>turms & conditiond</li>
              <li>social seller</li>
              <li>shiping</li>
            </ul>
          </div>
          <div className="ul-container">
            {" "}
            <h2>SHOP</h2>
            <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Children</li>
              <li>Bags</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="ul-container">
            {" "}
            <h2>COMPANY</h2>
            <ul>
              <li>About Us</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Affilite</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        {/* Toggle buttons */}
        <div className="toggle-buttons">
          <button
            className={`toggle-button ${!isSignUp && showForm ? "active" : ""}`}
            onClick={() => {
              setIsSignUp(false);
              setShowForm(true);
            }}
          >
            Sign In
          </button>
          <button
            className={`toggle-button ${isSignUp && showForm ? "active" : ""}`}
            onClick={() => {
              setIsSignUp(true);
              setShowForm(true);
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Sign In Form - Only show if showForm is true and isSignUp is false */}
        {showForm && !isSignUp && (
          <div className="form-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSignInSubmit}>
              <div className="form-group">
                <label htmlFor="signInEmail">Email</label>
                <input
                  type="email"
                  id="signInEmail"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  required
                  aria-label="Email address for sign in"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signInPassword">Password</label>
                <input
                  type="password"
                  id="signInPassword"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                  required
                  aria-label="Password for sign in"
                />
                {signInError && <p className="error-message">{signInError}</p>}
              </div>
              <button type="submit" className="submit-button">
                Sign In
              </button>
            </form>
          </div>
        )}

        {/* Sign Up Form - Only show if showForm is true and isSignUp is true */}
        {showForm && isSignUp && (
          <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
              <div className="form-group">
                <label htmlFor="signUpName">Name</label>
                <input
                  type="text"
                  id="signUpName"
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                  required
                  aria-label="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signUpEmail">Email</label>
                <input
                  type="email"
                  id="signUpEmail"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  required
                  aria-label="Email address for sign up"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signUpPassword">Password</label>
                <input
                  type="password"
                  id="signUpPassword"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  required
                  aria-label="Password for sign up"
                />
                {signUpError && <p className="error-message">{signUpError}</p>}
              </div>
              <button type="submit" className="submit-button">
                Sign Up
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
