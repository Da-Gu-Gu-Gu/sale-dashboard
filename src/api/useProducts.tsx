import { useState } from "react";
import { productsUrl } from "./endpoints";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const getProdcutList = async () => {
    try {
      const response = await fetch(`${productsUrl}`);
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.error("Error fetching orders with channels data:", error);
    }
  };

  return {
    products,
    setProducts,
    getProdcutList,
  };
};

export default useProducts;
