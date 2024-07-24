import { useState } from "react";
import { paymentsUrl } from "./endpoints";

const usePaymentList = () => {
  const [payments, setPayments] = useState([]);
  const getPaymentList = async () => {
    try {
      const response = await fetch(`${paymentsUrl}`);
      const customer = await response.json();
      setPayments(customer);
    } catch (error) {
      console.error("Error fetching orders with customer data:", error);
    }
  };

  return {
    payments,
    setPayments,
    getPaymentList,
  };
};

export default usePaymentList;
