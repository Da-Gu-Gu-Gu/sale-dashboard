import { Select } from "antd";
import { useEffect } from "react";

import usePaymentList from "../api/usePayments";

const PaymentDropDown = ({ data, disable, setPaymentId }: any) => {
  const { payments, getPaymentList, loading } = usePaymentList();
  useEffect(() => {
    getPaymentList();
  }, [data, loading]);

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
          className="w-[150px]"
        />
      )}
    </>
  );
};

export default PaymentDropDown;
