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
  const [error, setError] = useState("");
  // const [
  //   addProduct,
  //   ,
  //   { isLoading, isError, error: addProductError, isSuccess, data },
  // ] = useAddProductMutation();
  const [
    addProduct,
    { isLoading, isError, error: addProductError, isSuccess },
  ] = useAddProductMutation();
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
        await updateProduct({ id: productToEdit.id, ...product }).unwrap();
        console.log("Product updated successfully:", product);
      } else {
        await addProduct(product).unwrap();
        console.log("Product added successfully:", product);
      }
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
        <h2>{isLoading ? "Adding..." : "Add Product"}</h2>
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
          placeholder="Enter Product description"
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
      {isError && (
        <p>Error: {addProductError?.data?.message || "Something went wrong"}</p>
      )}

      {isSuccess && <p>Product added successfully!</p>}
    </div>
  );
};

export default ProductModal;
