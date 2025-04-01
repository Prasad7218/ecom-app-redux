import { motion } from "framer-motion";
import "./ProductAd.css";
const ProductAd = () => {
  return (
    <motion.div
      className="ad-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="ad-text">50% OFF on All Electronics Products!</h1>
    </motion.div>
  );
};

export default ProductAd;
