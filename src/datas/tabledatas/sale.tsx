import { Space } from "antd";

import {
  CheckCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const columnsData = [
  {
    title: "Sale Id",
    dataIndex: "id",
    key: "saleId",
  },
  {
    title: "CustomerName",
    render: (_: any, sale: any) => <p>{sale?.customer?.customer_name}</p>,
    key: "customer_name",
  },
  {
    title: "Customer Phone",
    render: (_: any, sale: any) => <p>{sale?.customer?.customer_phone}</p>,
    key: "customer_phone",
  },
  {
    title: "Status",
    key: "status",
    render: (_: any, sale: any) => (
      <Space size="middle" onClick={() => console.log(sale)}>
        <CheckCircleOutlined
          className={`cursor-pointer text-xl ${
            sale.status ? "text-blue-700" : "text-gray-700"
          }`}
        />
      </Space>
    ),
  },
  {
    title: "Channel",
    key: "channel",
    render: (_: any, sale: any) => <p>{sale?.channel?.channel_name}</p>,
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
    render: (_: any, sale: any) => (
      <Space size="middle" onClick={() => console.log(sale)}>
        <Link to={`/sale/${sale.id}`}>
          <EyeOutlined className="cursor-pointer text-lg text-blue-700" />
        </Link>
        <DeleteOutlined className="cursor-pointer text-lg text-red-700" />
      </Space>
    ),
  },
];

import { InputNumber } from "antd";

export const saleDetailColumnData = [
  {
    title: "Name",
    dataIndex: "product_name",
    key: "product_name",
  },
  {
    title: "Unit Price",
    dataIndex: "product_price",
    key: "product_price",
  },
  {
    title: "Qty",
    key: "product_price",
    render: (_: any, product: any) => (
      <Space size="middle" onClick={() => console.log(product)}>
        <InputNumber
          min={1}
          max={10}
          size="small"
          defaultValue={product.qty}
          className="cursor-pointer text-lg text-blue-700"
        />
      </Space>
    ),
  },
  {
    title: "Sub Total",
    dataIndex: "total", //subtotal
    key: "total",
  },
];

export const saleCreateColumnData = [
  {
    title: "Name",
    dataIndex: "product_name",
    key: "product_name",
  },
  {
    title: "Price",
    dataIndex: "product_price",
    key: "product_price",
  },
  {
    title: "Qty",
    key: "product_price",
    render: (_: any, product: any) => (
      <Space size="middle" onClick={() => console.log(product)}>
        <InputNumber
          min={1}
          max={product?.product_stock}
          size="small"
          defaultValue={1}
          className="cursor-pointer text-lg text-blue-700"
        />
      </Space>
    ),
  },
  {
    title: "Sub Total",
    dataIndex: "total", //subtotal
    key: "total",
  },
];
