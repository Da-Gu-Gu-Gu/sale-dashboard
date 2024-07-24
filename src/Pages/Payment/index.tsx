import { Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnsData } from "../../datas/tabledatas/payment";
import usePaymentList from "../../api/usePayments";
import { useEffect } from "react";

const Payments = () => {
  const { payments, getPaymentList } = usePaymentList();

  useEffect(() => {
    getPaymentList();
  }, []);

  return (
    <div>
      <TitleText title="Payment Methods" />
      <div className="py-5">
        <Table dataSource={payments} columns={columnsData} />
      </div>
    </div>
  );
};

export default Payments;
