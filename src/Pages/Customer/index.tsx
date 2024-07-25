import { Button, Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnData } from "../../datas/tabledatas/customer";
import useCustomerList from "../../api/useCustomer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../routes/data";
import { PlusCircleOutlined } from "@ant-design/icons";

const Customer = () => {
  const { customers, getCustomerList } = useCustomerList();
  const [isDeleted, setDeleted] = useState(false);
  useEffect(() => {
    getCustomerList();
  }, [isDeleted]);

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
        <Table
          key={"id"}
          dataSource={customers}
          columns={columnData(setDeleted)}
        />
      </div>
    </div>
  );
};

export default Customer;
