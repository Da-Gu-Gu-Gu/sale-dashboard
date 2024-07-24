import { useState } from "react";
import { channelUrl } from "./endpoints";

const useSaleChannel = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const getChannelList = async () => {
    try {
      const response = await fetch(`${channelUrl}`);
      const channels = await response.json();
      setChannels(channels);
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      console.error("Error fetching orders with channels data:", error);
    }
  };

  return {
    channels,
    setChannels,
    getChannelList,
    loading,
  };
};

export default useSaleChannel;

export const useCreateSaleChannel = () => {
  const [channel, setSaleChannel] = useState({});
  const [loading, setLoading] = useState(false);
  const createChannel = async (payload: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${channelUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const res = await response.json();
        setSaleChannel(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return {
    loading,
    createChannel,
    channel,
  };
};

export const useSaleChannelDetail = () => {
  const [channel, setChannel] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const getChannel = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${channelUrl}/${id}`);
      if (response.ok) {
        const res = await response.json();
        setChannel(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return {
    loading,
    getChannel,
    channel,
  };
};

export const useUpdateChannel = () => {
  const [channel, setChannel] = useState({});
  const [loading, setLoading] = useState(false);
  const updateChannel = async (id: any, payload: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${channelUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const res = await response.json();
        setChannel(res);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return {
    loading,
    updateChannel,
    channel,
  };
};

export const useDeleteChannel = () => {
  const [loading, setLoading] = useState(false);

  const deleteChannel = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${channelUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const res = await response.json();
        console.log("deleted", res);
        setLoading(false);
      } else {
        setLoading(false);
        console.error("Failed to update channel");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  return {
    loading,
    deleteChannel,
  };
};
