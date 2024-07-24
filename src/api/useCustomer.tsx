import { useState } from "react";
import { customerUrl } from "./endpoints";

const useCustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const getCustomerList = async () => {
    try {
      const response = await fetch(`${customerUrl}`);
      const customer = await response.json();
      setCustomers(customer);
    } catch (error) {
      console.error("Error fetching orders with customer data:", error);
    }
  };

  return {
    customers,
    setCustomers,
    getCustomerList,
  };
};

export default useCustomerList;
