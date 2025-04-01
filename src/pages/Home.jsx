import React, { lazy, Suspense, useMemo, useState } from "react";
import { useGetProductsQuery } from "../redux/apiSlices/productsApiSlice";
import ProductCard from "../components/card/ProductCard";
import "./Home.css";
import Button from "../components/button/Button";
import ProductModal from "../components/modal/productModal/ProductModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, isLoading } = useGetProductsQuery();
  // const [getProducts, { data, error, isLoading }] = useLazyGetProductsQuery();
  const totalProducts = useMemo(() => {
    console.log("Inside useMemo");
    return data ? data.length : 0;
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts</p>;

  const addProduct = () => {
    setIsModalOpen(true);
  };

  const ProductAd = lazy(() => import("../components/productAd/ProductAd"));

  return (
    <>
      <Suspense fallback={<h1 clasName="loader-ad">Loading ad...</h1>}>
        <ProductAd />
      </Suspense>
      <div className="button-product-wrapper">
        <Button
          label="Add a New Product"
          variant="primary"
          onClick={addProduct}
          disabled={false}
          size="medium"
          fullWidth={false}
        />
        <h2>Total Products: {totalProducts}</h2>
      </div>

      <div className="card-container">
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Home;
