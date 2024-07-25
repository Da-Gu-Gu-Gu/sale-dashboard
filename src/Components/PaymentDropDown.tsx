import { Select } from "antd";
import { useEffect } from "react";

import usePaymentList from "../api/usePayments";

const PaymentDropDown = ({ data, disable, setPaymentId }: any) => {
  const { payments, getPaymentList, loading } = usePaymentList();
  useEffect(() => {
    getPaymentList();
  }, []);

  const options = payments?.map((x: any) => {
    return {
      label: <span>{x?.payment_name}</span>,
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
          onChange={(value) => setPaymentId(value)}
          variant={!disable ? "outlined" : "borderless"}
          className={`w-[150px] ${
            !disable ? "bg-white !text-blue-300" : "custom-select"
          }`}
        />
      )}
    </>
  );
};

export default PaymentDropDown;
