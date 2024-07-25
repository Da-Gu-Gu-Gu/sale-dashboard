import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { Link } from "react-router-dom";
import { useDeleteCustomer } from "../../api/useCustomer";

const CustomerAction = ({ customer, setDeleted }: any) => {
  const { deleteCustomer } = useDeleteCustomer();

  const warning = () => {
    Modal.confirm({
      title: "Would you Delete this Customer?",
      onCancel: () => {},
      cancelText: "No",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteCustomer(customer.id);
        setDeleted((prev: any) => !prev);
      },
    });
  };

  return (
    <Space size="middle">
      <Link to={`/customers/${customer.id}`}>
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

export const columnData = (setDeleted: any) => [
  {
    title: "Name",
    dataIndex: "customer_name",
    key: "customer_name",
  },
  {
    title: "Phone",
    dataIndex: "customer_phone",
    key: "customer_phone",
  },
  {
    title: "Address",
    dataIndex: "customer_address",
    key: "customer_address",
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, customer: any) => (
      <CustomerAction setDeleted={setDeleted} customer={customer} />
    ),
  },
];
