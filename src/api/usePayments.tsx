import { useState } from "react";
import { paymentsUrl } from "./endpoints";

const usePaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPaymentList = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${paymentsUrl}`);
      const customer = await response.json();
      setPayments(customer);
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      console.error("Error fetching orders with customer data:", error);
    }
  };

  return {
    loading,
    payments,
    setPayments,
    getPaymentList,
  };
};

export default usePaymentList;
