import { useState } from "react";
import "./ProductModal.css";

const ProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Product</h2>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button onClick={() => onAddProduct(product)}>Add Product</button>
        <button onClick={onClose} className="close-button">
          ✖
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
