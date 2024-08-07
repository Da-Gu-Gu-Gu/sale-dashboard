import { Button, Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnsData } from "../../datas/tabledatas/payment";
import usePaymentList from "../../api/usePayments";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../routes/data";
import { PlusCircleOutlined } from "@ant-design/icons";

const Payments = () => {
  const { payments, getPaymentList } = usePaymentList();
  const [isDeleted, setDeleted] = useState(false);
  useEffect(() => {
    getPaymentList();
  }, [isDeleted]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <TitleText title="Payment Method Lists" />
        <Link to={paths.paymentCreate}>
          <Button size="middle" icon={<PlusCircleOutlined />} type="primary">
            Create Payment Methods
          </Button>
        </Link>
      </div>
      <div className="py-5">
        <Table
          rowKey="id"
          dataSource={payments}
          columns={columnsData(setDeleted)}
        />
      </div>
    </div>
  );
};

export default Payments;
