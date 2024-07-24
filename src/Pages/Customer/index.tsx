import { Button, Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnData } from "../../datas/tabledatas/customer";
import useCustomerList from "../../api/useCustomer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../routes/data";
import { PlusCircleOutlined } from "@ant-design/icons";

const Customer = () => {
  const { customers, getCustomerList } = useCustomerList();
  useEffect(() => {
    getCustomerList();
  }, []);
  console.log(customers);
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitleText title="Customer Lists" />
        <Link to={paths.customerCreate}>
          <Button size="middle" icon={<PlusCircleOutlined />} type="primary">
            Create Customer
          </Button>
        </Link>
      </div>
      <div className="py-5">
        <Table dataSource={customers} columns={columnData} />
      </div>
    </div>
  );
};

export default Customer;
