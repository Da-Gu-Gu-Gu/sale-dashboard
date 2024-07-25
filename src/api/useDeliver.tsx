import { useState } from "react";
import { deliveryUrl } from "./endpoints";

const useDelivery = () => {
  const [delivery, setDelivery] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDeliverList = async () => {
    try {
      const response = await fetch(`${deliveryUrl}`);
      const delivery = await response.json();
      setDelivery(delivery);
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  return {
    delivery,
    setDelivery,
    getDeliverList,
    loading,
  };
};

export default useDelivery;

export const useCreateDelivery = () => {
  const [delivery, setDelivery] = useState({});
  const [loading, setLoading] = useState(false);
  const createDelivery = async (payload: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${deliveryUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const res = await response.json();
        setDelivery(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return {
    loading,
    createDelivery,
    delivery,
  };
};

export const useDeliveryDetail = () => {
  const [delivery, setDelivery] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const getDelivery = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${deliveryUrl}/${id}`);
      if (response.ok) {
        const res = await response.json();
        setDelivery(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return {
    loading,
    getDelivery,
    delivery,
  };
};

export const useUpdateDelivery = () => {
  const [delivery, setDelivery] = useState({});
  const [loading, setLoading] = useState(false);
  const updateDelivery = async (id: any, payload: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${deliveryUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const res = await response.json();
        setDelivery(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return {
    loading,
    updateDelivery,
    delivery,
  };
};

export const useDeleteDelivery = () => {
  const [loading, setLoading] = useState(false);

  const deleteDelivery = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${deliveryUrl}/${id}`, {
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
        console.error("Failed to update delivery");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  return {
    loading,
    deleteDelivery,
  };
};
