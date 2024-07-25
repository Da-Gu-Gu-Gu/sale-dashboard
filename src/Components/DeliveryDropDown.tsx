import { Select } from "antd";
import { useEffect } from "react";

import useDelivery from "../api/useDeliver";

const DeliveryDropDown = ({ data, disable, setDeliveryId }: any) => {
  const { delivery, getDeliverList, loading } = useDelivery();
  useEffect(() => {
    getDeliverList();
  }, []);

  const options = delivery?.map((x: any) => {
    return {
      label: <span>{x?.deliver_name}</span>,
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
          onChange={(value) => setDeliveryId(value)}
          variant={!disable ? "outlined" : "borderless"}
          className={`w-[150px] ${
            !disable ? "bg-white !text-blue-300" : "custom-select"
          }`}
        />
      )}
    </>
  );
};

export default DeliveryDropDown;
