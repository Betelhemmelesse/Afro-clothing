import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-top">
        <h1>DISCOVER</h1>
        <p>
          African dresses ,African maxi skirts,jumpsuit,pants and accessories
          from afro-clothing
        </p>
        <div className="home-buttons">
          <Link to="/shoppingcart">
            <div className="home-button"> SHOP NOW</div>
          </Link>
          <Link to="/shoppingcart">
            <div className="home-button"> ORDER WHOLSALE</div>
          </Link>
        </div>
      </div>
      <div className="home-center">
        <div className="img-containers">
          <h2>WOMEN COLLECTIONS</h2>
          <p>
            Africa-inspired clothing brand offering quality,on-trend fashion at
            affordable prices
          </p>
          <Link to="/shoppingcart">
            <div className="home-center-button">SHOP NOW</div>
          </Link>
        </div>
        <div className="img-containers">
          <h2>MEN COLLECTIONS</h2>
          <p>
            Africa-inspired clothing brand,contemporary handmade African
            clothing for men
          </p>
          <Link to="/shoppingcart">
            {" "}
            <div className="home-center-button">SHOP NOW</div>
          </Link>
        </div>
        <div className="img-containers">
          <h2>KID'S COLLECTIONS</h2>
          <p>African print dress from our huge range of kids collections</p>
          <Link to="/shoppingcart">
            <div className="home-center-button">SHOP NOW</div>
          </Link>
        </div>
      </div>
      <div className="home-bottom">
        <p className="first">SEE OUR COLLECTIONS</p>
        <h2>PRODUCTS CATEGORIES</h2>
        <p className="second">
          Discover our authentic ready to wear African clothing designed to make
          you feel unique
        </p>
        <div className="bottom-imgs">
          <div className="bottom-img">
            <h3>ACCESSORIES</h3>
          </div>
          <div className="bottom-img">
            <h3>WOMEN'S FASHION</h3>
          </div>
          <div className="bottom-img">
            <h3>MEN'S VOGUE</h3>
          </div>
          <div className="bottom-img">
            <h3>CHILDREN'S</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
