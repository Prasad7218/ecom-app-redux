import React, { useCallback, useMemo, useState } from "react";
// import { lazy, Suspense } from "react";
import { useGetProductsQuery } from "../redux/apiSlices/productsApiSlice";
import ProductCard from "../components/card/ProductCard";
import "./Home.css";
import Button from "../components/button/Button";
import ProductModal from "../components/modal/productModal/ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/slices/productSlice";
import Input from "../components/input/Input";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();
  // const [getProducts, { data, error, isLoading }] = useLazyGetProductsQuery();
  const totalProducts = useMemo(() => {
    console.log("Inside useMemo");
    return data ? data.length : 0;
  }, [data]);

  const products = useSelector((state) => state.products.products);
  console.log("🚀 ~ Home ~ products:", products);

  const searchQuery = useSelector((state) => state.products.searchQuery);

  useMemo(() => {
    if (data) {
      dispatch(setSearchQuery(""));
    }
  }, [data, dispatch]);

  const filteredProducts = () => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const addProduct = useCallback(() => {
    console.log("Inside Callback Hook");
    setIsModalOpen(true);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts</p>;

  // const ProductAd = lazy(() => import("../components/productAd/ProductAd"));

  return (
    <>
      {/* <Suspense fallback={<h1 clasName="loader-ad">Loading ad...</h1>}>
        <ProductAd />
      </Suspense> */}
      <div className="button-product-wrapper">
        <Button
          label="Add a New Product"
          variant="primary"
          onClick={addProduct}
          disabled={false}
          size="medium"
          fullWidth={false}
        />
        <Input
          type="text"
          placeholder="Search Product"
          name="name"
          value={searchQuery}
          onChange={handleSearch}
          error={error}
          size="large"
        />
        <h2>Total Products: {totalProducts}</h2>
      </div>

      <div className="card-container">
        {filteredProducts().map((product) => (
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
