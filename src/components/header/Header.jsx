import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ cartCount }) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/home")}>
        Ecom-App
      </div>
      {/* <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
      </nav> */}
      <div className="cart-icon">
        <FaShoppingCart size={24} />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </header>
  );
};

export default Header;
