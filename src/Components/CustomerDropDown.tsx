import { Select } from "antd";
import useCustomerList from "../api/useCustomer";
import { useEffect } from "react";

const CustomerDropDown = ({ data }: { data: any }) => {
  const { customers, getCustomerList } = useCustomerList();
  useEffect(() => {
    getCustomerList();
  }, [data]);

  console.log(data?.id);
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
    <Select
      defaultValue={data ? data.id : 1}
      options={options}
      className="w-[200px]"
    />
  );
};

export default CustomerDropDown;
