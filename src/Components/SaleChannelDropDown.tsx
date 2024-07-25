import { Select } from "antd";
import { useEffect } from "react";
import useSaleChannel from "../api/useSaleChannel";

const SaleChannelDropDown = ({ data, disable, setChannelId }: any) => {
  const { channels, getChannelList, loading } = useSaleChannel();
  useEffect(() => {
    getChannelList();
  }, [data, loading]);

  const options = channels?.map((x: any) => {
    return {
      label: <span>{x?.channel_name}</span>,
      value: x?.id,
    };
  });

  return (
    <>
      {data && (
        <Select
          disabled={disable}
          loading={loading}
          defaultValue={data?.id ?? null}
          options={options}
          onChange={(value) => setChannelId(value)}
          className="w-[150px]"
        />
      )}
    </>
  );
};

export default SaleChannelDropDown;
