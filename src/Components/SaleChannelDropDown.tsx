import { Select } from "antd";
import { useEffect } from "react";
import useSaleChannel from "../api/useSaleChannel";

const SaleChannelDropDown = ({ data }: { data: any }) => {
  const { channels, getChannelList } = useSaleChannel();
  useEffect(() => {
    getChannelList();
  }, [data]);

  console.log(data?.id);
  const options = channels?.map((x: any) => {
    return {
      label: <span>{x?.channel_name}</span>,
      value: x?.id,
    };
  });

  return (
    <Select
      defaultValue={data ? data?.id : 1}
      options={options}
      className="w-[150px]"
    />
  );
};

export default SaleChannelDropDown;
