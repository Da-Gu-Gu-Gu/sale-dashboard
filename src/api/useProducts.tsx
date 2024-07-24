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

export const useCreateProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const createProduct = async (payload: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${productsUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const createProduct = await response.json();
        setProduct(createProduct);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching orders with product data:", error);
    }
  };
  return {
    loading,
    createProduct,
    product,
  };
};

export const useProductDetail = () => {
  const [product, setProduct] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const getProduct = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${productsUrl}/${id}`);
      if (response.ok) {
        const res = await response.json();
        setProduct(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching orders with product data:", error);
    }
  };
  return {
    loading,
    getProduct,
    product,
  };
};

export const useUpdateProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const updateProduct = async (id: any, payload: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${productsUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const res = await response.json();
        setProduct(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching orders with product data:", error);
    }
  };
  return {
    loading,
    updateProduct,
    product,
  };
};

export const useDeleteProduct = () => {
  const [loading, setLoading] = useState(false);

  const deleteProduct = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${productsUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const product = await response.json();
        console.log("deleted", product);
        setLoading(false);
      } else {
        setLoading(false);
        console.error("Failed to update sale");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  return {
    loading,
    deleteProduct,
  };
};
