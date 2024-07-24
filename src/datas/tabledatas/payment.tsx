import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDeletePayment } from "../../api/usePayments";

const PaymentActions = ({ payment }: any) => {
  const { deletePayment } = useDeletePayment();
  const navigate = useNavigate();
  const warning = () => {
    Modal.warning({
      title: "Would you Delete this payment?",
      // content: "some messages...some messages...",
      onOk: () => {
        deletePayment(payment.id);
        navigate("/paymentmethods");
      },
    });
  };

  return (
    <Space size="middle" onClick={() => console.log(payment)}>
      <Link to={`/paymentmethods/${payment.id}`}>
        <EyeOutlined className="cursor-pointer text-lg text-blue-700" />
      </Link>
      <Button
        onClick={warning}
        icon={
          <DeleteOutlined className="cursor-pointer text-lg text-red-700" />
        }
      />
    </Space>
  );
};

export const columnsData = [
  {
    title: "Name",
    dataIndex: "payment_name",
    key: "payment_name",
  },
  {
    title: "Account Number",
    dataIndex: "payment_account",
    key: "payment_account",
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, payment: any) => <PaymentActions payment={payment} />,
  },
];
