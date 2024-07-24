import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteCustomer } from "../../api/useCustomer";

const CustomerAction = ({ customer }: any) => {
  const { deleteCustomer } = useDeleteCustomer();
  const navigate = useNavigate();
  const warning = () => {
    Modal.warning({
      title: "Would you Delete this Customer?",
      // content: "some messages...some messages...",
      onOk: () => {
        deleteCustomer(customer.id);
        navigate("/customers");
      },
    });
  };

  return (
    <Space size="middle" onClick={() => console.log(customer)}>
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

export const columnData = [
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
    render: (_: any, customer: any) => <CustomerAction customer={customer} />,
  },
];

export const dataSource = [
  {
    key: 1,
    customer_id: "CUST001",
    customer_name: "John Doe",
    customer_phone: "123-456-7890",
    customer_address: "123 Main St, Springfield, IL",
  },
  {
    key: 2,
    customer_id: "CUST002",
    customer_name: "Jane Smith",
    customer_phone: "234-567-8901",
    customer_address: "456 Oak St, Springfield, IL",
  },
  {
    key: 3,
    customer_id: "CUST003",
    customer_name: "Michael Johnson",
    customer_phone: "345-678-9012",
    customer_address: "789 Pine St, Springfield, IL",
  },
  {
    key: 4,
    customer_id: "CUST004",
    customer_name: "Emily Davis",
    customer_phone: "456-789-0123",
    customer_address: "101 Maple St, Springfield, IL",
  },
  {
    key: 5,
    customer_id: "CUST005",
    customer_name: "David Wilson",
    customer_phone: "567-890-1234",
    customer_address: "202 Birch St, Springfield, IL",
  },
  {
    key: 6,
    customer_id: "CUST006",
    customer_name: "Linda Brown",
    customer_phone: "678-901-2345",
    customer_address: "303 Cedar St, Springfield, IL",
  },
  {
    key: 7,
    customer_id: "CUST007",
    customer_name: "James Taylor",
    customer_phone: "789-012-3456",
    customer_address: "404 Elm St, Springfield, IL",
  },
  {
    key: 8,
    customer_id: "CUST008",
    customer_name: "Sarah Lee",
    customer_phone: "890-123-4567",
    customer_address: "505 Walnut St, Springfield, IL",
  },
  {
    key: 9,
    customer_id: "CUST009",
    customer_name: "Robert Harris",
    customer_phone: "901-234-5678",
    customer_address: "606 Chestnut St, Springfield, IL",
  },
  {
    key: 10,
    customer_id: "CUST010",
    customer_name: "Patricia Clark",
    customer_phone: "012-345-6789",
    customer_address: "707 Redwood St, Springfield, IL",
  },
  {
    key: 11,
    customer_id: "CUST011",
    customer_name: "Patricia",
    customer_phone: "012-345-6789",
    customer_address: "707 Redwood St, Springfield, IL",
  },
];
