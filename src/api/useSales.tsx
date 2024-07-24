import { useState } from "react";
import { salesUrl } from "./endpoints";

const useSalesList = () => {
  const [sales, setSales] = useState([]);
  const getSales = async () => {
    try {
      const response = await fetch(`${salesUrl}`);
      const sales = await response.json();
      setSales(sales);
    } catch (error) {
      console.error("Error fetching orders with customer data:", error);
    }
  };

  return {
    sales,
    setSales,
    getSales,
  };
};

export default useSalesList;

export const useSales = () => {
  const [sale, setSale] = useState({});
  const getSale = async (id: string) => {
    try {
      const response = await fetch(
        `${salesUrl}?id=${id}&_expand=channel&_expand=customer`
      );
      const sales = await response.json();

      sales && setSale(sales[0]);
    } catch (error) {
      console.error("Error fetching orders with customer data:", error);
    }
  };

  return {
    sale,
    setSale,
    getSale,
  };
};
