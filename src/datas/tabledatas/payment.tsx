import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { Link } from "react-router-dom";
import { useDeletePayment } from "../../api/usePayments";

const PaymentActions = ({ payment, setDeleted }: any) => {
  const { deletePayment } = useDeletePayment();

  const warning = () => {
    Modal.confirm({
      title: "Would you Delete this payment?",
      onCancel: () => {},
      cancelText: "No",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deletePayment(payment.id);
        setDeleted(true);
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

export const columnsData = (setDeleted: any) => [
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
    render: (_: any, payment: any) => (
      <PaymentActions setDeleted={setDeleted} payment={payment} />
    ),
  },
];
