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
