import React, { useState } from "react";
import "./ProductCard.css";
import Button from "../button/Button";
import ProductModal from "../modal/productModal/ProductModal";
import { useDeleteProductMutation } from "../../redux/apiSlices/productsApiSlice";
// import Button from "../button/Button";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [deleteProduct] = useDeleteProductMutation();
  const EditProduct = () => {
    setProductToEdit(product);
    setIsModalOpen(true);
  };

  const DeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.error("Error:", error);
      return error;
    }
  };
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Rs.{product.price}</p>
        <div className="button-wrapper">
          <Button
            label="Edit"
            variant="primary"
            onClick={EditProduct}
            disabled={false}
            size="medium"
            fullWidth={false}
          />
          <Button
            label="Delete"
            variant="secondary"
            onClick={() => DeleteProduct(product.id)}
            disabled={false}
            size="medium"
            fullWidth={false}
          />
        </div>
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productToEdit={productToEdit}
        />
      </div>
    </div>
  );
};

export default ProductCard;
