import { Space } from "antd";

import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
export const columnsData = [
  {
    title: "OrderId",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "CustomerName",
    dataIndex: "customer_name",
    key: "customer_name",
  },
  {
    title: "Customer Phone",
    dataIndex: "customer_phone",
    key: "customer_phone",
  },
  {
    title: "Channel",
    dataIndex: "channel",
    key: "channel",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, order: any) => (
      <Space size="middle" onClick={() => console.log(order)}>
        <EyeOutlined className="cursor-pointer text-lg text-blue-700" />
        <DeleteOutlined className="cursor-pointer text-lg text-red-700" />
      </Space>
    ),
  },
];

export const dataSource = [
  {
    key: 1,
    orderId: "ORD001",
    customer_name: "John Doe",
    customer_phone: "123-456-7890",
    channel: "Online",
    total: "$120.50",
    date: "2024-07-01",
  },
  {
    key: 2,
    orderId: "ORD002",
    customer_name: "Jane Smith",
    customer_phone: "234-567-8901",
    channel: "Retail",
    total: "$80.00",
    date: "2024-07-02",
  },
  {
    key: 3,
    orderId: "ORD003",
    customer_name: "Michael Johnson",
    customer_phone: "345-678-9012",
    channel: "Mobile App",
    total: "$150.75",
    date: "2024-07-03",
  },
  {
    key: 4,
    orderId: "ORD004",
    customer_name: "Emily Davis",
    customer_phone: "456-789-0123",
    channel: "Online",
    total: "$60.25",
    date: "2024-07-04",
  },
  {
    key: 5,
    orderId: "ORD005",
    customer_name: "David Wilson",
    customer_phone: "567-890-1234",
    channel: "Retail",
    total: "$200.00",
    date: "2024-07-05",
  },
  {
    key: 6,
    orderId: "ORD006",
    customer_name: "Linda Brown",
    customer_phone: "678-901-2345",
    channel: "Mobile App",
    total: "$75.00",
    date: "2024-07-06",
  },
  {
    key: 7,
    orderId: "ORD007",
    customer_name: "James Taylor",
    customer_phone: "789-012-3456",
    channel: "Online",
    total: "$95.50",
    date: "2024-07-07",
  },
  {
    key: 8,
    orderId: "ORD008",
    customer_name: "Sarah Lee",
    customer_phone: "890-123-4567",
    channel: "Retail",
    total: "$130.00",
    date: "2024-07-08",
  },
  {
    key: 9,
    orderId: "ORD009",
    customer_name: "Robert Harris",
    customer_phone: "901-234-5678",
    channel: "Mobile App",
    total: "$110.75",
    date: "2024-07-09",
  },
  {
    key: 10,
    orderId: "ORD010",
    customer_name: "Patricia Clark",
    customer_phone: "012-345-6789",
    channel: "Online",
    total: "$140.25",
    date: "2024-07-10",
  },
  {
    key: 11,
    orderId: "ORD011",
    customer_name: "Patricia",
    customer_phone: "012-345-6789",
    channel: "Online",
    total: "$140.25",
    date: "2024-07-10",
  },
];
