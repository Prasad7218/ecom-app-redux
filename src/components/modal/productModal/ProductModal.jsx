import { useEffect, useState } from "react";
import "./ProductModal.css";
import Input from "../../input/Input";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../../redux/apiSlices/productsApiSlice";

const ProductModal = ({ isOpen, onClose, productToEdit }) => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });
  //   const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    } else {
      setProduct({ name: "", image: "", price: "", description: "" });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const onAddProduct = async (product) => {
    try {
      if (productToEdit) {
        // Update existing product
        await updateProduct({ id: productToEdit.id, ...product }).unwrap();
        console.log("Product updated successfully:", product);
      } else {
        // Add new product
        await addProduct(product).unwrap();
        console.log("Product added successfully:", product);
      }
      //   const response = await addProduct(product).unwrap();
      //   console.log("Product added successfully:", response);
      onClose();
    } catch (err) {
      console.error("Error adding product:", err);
      setError("Failed to add product. Please try again.");
    }
  };
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Product</h2>
        <Input
          type="text"
          placeholder="Enter Product name"
          name="name"
          value={product.name || ""}
          onChange={handleChange}
          error={error}
          size="large"
        />
        <Input
          type="text"
          placeholder="Enter Product Image Url"
          name="image"
          value={product.image || ""}
          onChange={handleChange}
          error={error}
          size="large"
        />
        <Input
          type="number"
          placeholder="Enter Product price"
          name="price"
          value={product.price || ""}
          onChange={handleChange}
          error={error}
          size="large"
        />
        <Input
          type="text"
          placeholder="Enter Product name"
          name="description"
          value={product.description || ""}
          onChange={handleChange}
          error={error}
          size="large"
        />
        <button onClick={() => onAddProduct(product)}>
          {productToEdit ? "Update Product" : "Add Product"}
        </button>
        <button onClick={onClose} className="close-button">
          ✖
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
