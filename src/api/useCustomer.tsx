import { useState } from "react";
import { customerUrl } from "./endpoints";

const useCustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const getCustomerList = async () => {
    try {
      const response = await fetch(`${customerUrl}`);
      const customer = await response.json();
      setCustomers(customer);
      return true;
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

export const useCreateCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(false);
  const createCustomer = async (payload: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${customerUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const createdCustomer = await response.json();
        setCustomer(createdCustomer);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching orders with customer data:", error);
    }
  };
  return {
    loading,
    createCustomer,
    customer,
  };
};

export const useCustomerDetail = () => {
  const [customer, setCustomer] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const getCustomer = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${customerUrl}/${id}`);
      if (response.ok) {
        const res = await response.json();
        setCustomer(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching orders with customer data:", error);
    }
  };
  return {
    loading,
    getCustomer,
    customer,
  };
};

export const useUpdateCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(false);
  const updateCustomer = async (id: any, payload: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${customerUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const res = await response.json();
        setCustomer(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching orders with customer data:", error);
    }
  };
  return {
    loading,
    updateCustomer,
    customer,
  };
};

export const useDeleteCustomer = () => {
  const [loading, setLoading] = useState(false);

  const deleteCustomer = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${customerUrl}/${id}`, {
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
        console.error("Failed to update sale");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  return {
    loading,
    deleteCustomer,
  };
};
