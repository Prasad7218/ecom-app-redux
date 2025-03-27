import React, { useState } from "react";
import { useGetProductsQuery } from "../redux/apiSlices/productsApiSlice";
import ProductCard from "../components/card/ProductCard";
import "./Home.css";
import Button from "../components/button/Button";
import ProductModal from "../components/modal/productModal/ProductModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts</p>;

  const addProduct = () => {
    setIsModalOpen(true);
  };

  const handleAddProduct = (product) => {
    // Add product to the API
    // setIsModalOpen(false); // Close the modal after adding a product
  };

  return (
    <>
      <Button
        label="Add a New Product"
        variant="primary"
        onClick={addProduct}
        disabled={false}
        size="medium"
        fullWidth={false}
      />

      <div class="card-container">
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </>
  );
};

export default Home;
