import { useState } from "react";
import { channelUrl } from "./endpoints";

const useSaleChannel = () => {
  const [channels, setChannels] = useState([]);
  const getChannelList = async () => {
    try {
      const response = await fetch(`${channelUrl}`);
      const channels = await response.json();
      setChannels(channels);
    } catch (error) {
      console.error("Error fetching orders with channels data:", error);
    }
  };

  return {
    channels,
    setChannels,
    getChannelList,
  };
};

export default useSaleChannel;
