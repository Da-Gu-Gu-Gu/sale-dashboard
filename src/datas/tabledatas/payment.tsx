import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Space } from "antd";

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
    render: (_: any, payment: any) => (
      <Space size="middle" onClick={() => console.log(payment)}>
        <EyeOutlined className="cursor-pointer text-lg text-blue-700" />
        <DeleteOutlined className="cursor-pointer text-lg text-red-700" />
      </Space>
    ),
  },
];

export const dataSource = [
  {
    key: 1,
    payment_name: "SCB Bank",
    payment_account: "1234567890",
    payment_id: "PAY001",
  },
  {
    key: 2,
    payment_name: "Bangkok Bank",
    payment_account: "3123123223",
    payment_id: "PAY002",
  },
  {
    key: 3,
    payment_name: "K Bank",
    payment_account: "4237283923",
    payment_id: "PAY003",
  },
];
