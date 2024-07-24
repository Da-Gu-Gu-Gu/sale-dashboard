import { Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnData, dataSource } from "../../datas/tabledatas/customer";
import useCustomerList from "../../api/useCustomer";
import { useEffect } from "react";

const Customer = () => {
  const { customers, getCustomerList } = useCustomerList();
  useEffect(() => {
    getCustomerList();
  }, []);
  return (
    <div>
      <TitleText title="Customer Lists" />
      <div className="py-5">
        <Table dataSource={customers} columns={columnData} />
      </div>
    </div>
  );
};

export default Customer;
