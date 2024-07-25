import { Select } from "antd";
import useCustomerList from "../api/useCustomer";
import { useEffect } from "react";

const CustomerDropDown = ({ data, disable, setCustomerId }: any) => {
  const { customers, getCustomerList } = useCustomerList();
  useEffect(() => {
    getCustomerList();
  }, []);

  const options = customers?.map((x: any) => {
    return {
      label: (
        <span>
          {x?.customer_name} ({x.customer_phone})
        </span>
      ),
      value: x?.id,
    };
  });

  return (
    <>
      {data && (
        <Select
          defaultValue={data?.id ?? null}
          options={options}
          disabled={disable}
          variant={!disable ? "outlined" : "borderless"}
          onChange={(value) => setCustomerId(value)}
          className={`w-[200px] ${
            !disable ? "bg-white !text-blue-300" : "custom-select"
          }`}
        />
      )}
    </>
  );
};

export default CustomerDropDown;
