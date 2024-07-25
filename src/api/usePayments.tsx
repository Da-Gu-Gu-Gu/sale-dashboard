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
      console.error("Error fetching  data:", error);
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

export const useCreatePayment = () => {
  const [payement, setPayment] = useState({});
  const [loading, setLoading] = useState(false);
  const createPayment = async (payload: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${paymentsUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const res = await response.json();
        setPayment(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching  data:", error);
    }
  };
  return {
    loading,
    createPayment,
    payement,
  };
};

export const usePaymentDetail = () => {
  const [payment, setPayment] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const getPayment = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${paymentsUrl}/${id}`);
      if (response.ok) {
        const res = await response.json();
        setPayment(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return {
    loading,
    getPayment,
    payment,
  };
};

export const useUpdatePayment = () => {
  const [payment, setPayment] = useState({});
  const [loading, setLoading] = useState(false);
  const updatePayment = async (id: any, payload: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${paymentsUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const res = await response.json();
        setPayment(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching  data:", error);
    }
  };
  return {
    loading,
    updatePayment,
    payment,
  };
};

export const useDeletePayment = () => {
  const [loading, setLoading] = useState(false);

  const deletePayment = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${paymentsUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        await response.json();

        setLoading(false);
      } else {
        setLoading(false);
        console.error("Failed to update payment");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  return {
    loading,
    deletePayment,
  };
};
