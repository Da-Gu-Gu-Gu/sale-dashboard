import { useState } from "react";
import { salesUrl } from "./endpoints";
import useCustomerList from "./useCustomer";
import useSaleChannel from "./useSaleChannel";
import usePaymentList from "./usePayments";

const useSalesList = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const { customers, getCustomerList } = useCustomerList();
  const { channels, getChannelList } = useSaleChannel();
  const { payments, getPaymentList } = usePaymentList();

  const getSales = async () => {
    try {
      const response = await fetch(`${salesUrl}`);
      const sales = await response.json();
      const isCustommerFetchSuccess = await getCustomerList();
      const isChannelFetchSuccess = await getChannelList();
      const isPayMentFetchSuccess = await getPaymentList();
      console.log(
        isCustommerFetchSuccess,
        isChannelFetchSuccess,
        isPayMentFetchSuccess
      );
      if (
        isCustommerFetchSuccess &&
        isChannelFetchSuccess &&
        isPayMentFetchSuccess
      ) {
        const salesWithDetails = sales.map((sale: any) => {
          const customer = customers.find((c: any) => c.id == sale.customerId);
          console.log(customers, customer);
          const channel = channels.find((ch: any) => ch.id == sale.channelId);
          const payment = payments.find((pay: any) => pay.id == sale.paymentId);

          return {
            ...sale,
            customer,
            channel,
            payment,
          };
        });
        console.log(salesWithDetails);
        setSales(salesWithDetails);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching orders with customer data:", error);
    }
  };

  return {
    sales,
    setSales,
    getSales,
    loading,
  };
};

export default useSalesList;

export const useSales = () => {
  const [sale, setSale] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const { customers, getCustomerList } = useCustomerList();
  const { channels, getChannelList } = useSaleChannel();
  const { payments, getPaymentList } = usePaymentList();

  const getSale = async (id: string) => {
    try {
      const response = await fetch(`${salesUrl}?id=${id}`);
      const sale = await response.json();
      const isCustommerFetchSuccess = await getCustomerList();
      const isChannelFetchSuccess = await getChannelList();
      const isPayMentFetchSuccess = await getPaymentList();
      if (
        isCustommerFetchSuccess &&
        isChannelFetchSuccess &&
        isPayMentFetchSuccess
      ) {
        const customer = customers.find((c: any) => c.id == sale[0].customerId);
        const channel = channels.find((ch: any) => ch.id == sale[0].channelId);
        const payment = payments.find((ch: any) => ch.id == sale[0].paymentId);

        const res = {
          sale: sale[0],
          customer,
          channel,
          payment,
        };

        setSale(res);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching orders with customer data:", error);
    }
  };

  return {
    sale,
    setSale,
    getSale,
    loading,
  };
};

export const useUpdateSale = () => {
  const [loading, setLoading] = useState(false);

  const updateSaleInvoice = async (id: any, sale: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${salesUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sale),
      });
      if (response.ok) {
        const updatedSale = await response.json();
        console.log("update", updatedSale);
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
    updateSaleInvoice,
  };
};

export const useCreateSale = () => {
  const [loading, setLoading] = useState(false);

  const createSaleInvoice = async (sale: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${salesUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sale),
      });
      if (response.ok) {
        const createdSale = await response.json();
        console.log("created", createdSale);
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
    createSaleInvoice,
  };
};

export const useDeleteSale = () => {
  const [loading, setLoading] = useState(false);

  const deleteSaleInvoice = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${salesUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const deleteSale = await response.json();
        console.log("deleted", deleteSale);
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
    deleteSaleInvoice,
  };
};
