import React from "react";
import "./ProductCard.css";
// import Button from "../button/Button";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div clasName="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Rs.{product.price}</p>
        {/* <Button
          label="Add to Cart"
          variant="primary"
          onClick={addProduct}
          disabled={false}
          size="medium"
          fullWidth={false}
        /> */}
      </div>
    </div>
  );
};

export default ProductCard;
