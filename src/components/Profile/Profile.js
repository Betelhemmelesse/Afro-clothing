import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css"; // Create this CSS file for styling
import profiledefault from "../../images/icons/profiledefault.png";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profilePicture: null,
  });

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedUser = { ...user, profilePicture: reader.result };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser)); // Save to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <h1>{user.name || "User"}</h1>{" "}
      {/* Display user's name instead of "Profile" */}
      <div className="profile-picture">
        <label htmlFor="profile-file-input" className="profile-label">
          <img
            src={user.profilePicture || profiledefault} // Use default image if no profile picture
            alt="Profile"
            className="profile-img"
          />
          {!user.profilePicture && <div className="plus-overlay">+</div>}{" "}
          {/* Show + only if no profile picture */}
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="profile-file-input"
          className="file-input"
        />
        {user.profilePicture /* Show change button only if profile picture exists */ && (
          <label htmlFor="profile-file-input" className="change-button">
            Change Profile
          </label>
        )}
      </div>
      <div className="profile-details">
        <p>Email : {user.email}</p> {/* Removed "Email:" label */}
      </div>
      <div className="profile-buttons">
        <Link to="/shoppingcart">
          <button className="profile-button">My ShoppingCart</button>
        </Link>
        <Link to="/wishlist">
          <button className="profile-button">My Wishlist</button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
