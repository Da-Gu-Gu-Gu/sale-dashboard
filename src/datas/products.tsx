import {
  CheckCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

export const columnData = [
  {
    title: "Name",
    dataIndex: "product_name",
    key: "product_name",
  },
  {
    title: "Product Code",
    dataIndex: "product_code",
    key: "product_code",
  },
  {
    title: "Price",
    dataIndex: "product_price",
    key: "product_price",
  },
  {
    title: "Stock",
    dataIndex: "product_stock",
    key: "product_stock",
  },
  {
    title: "Is Available",
    key: "product_available",
    render: (_: any, product: any) => (
      <Space size="middle" onClick={() => console.log(product)}>
        <CheckCircleOutlined
          className={`cursor-pointer text-xl ${
            product.product_available ? "text-blue-700" : "text-gray-700"
          }`}
        />
      </Space>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, sale: any) => (
      <Space size="middle" onClick={() => console.log(sale)}>
        <EyeOutlined className="cursor-pointer text-lg text-blue-700" />
        <DeleteOutlined className="cursor-pointer text-lg text-red-700" />
      </Space>
    ),
  },
];

export const dataSource = [
  {
    key: 1,
    product_name: "Laptop",
    product_code: "PROD001",
    product_price: "$999.99",
    product_stock: 25,
    product_available: true,
  },
  {
    key: 2,
    product_name: "Smartphone",
    product_code: "PROD002",
    product_price: "$699.99",
    product_stock: 50,
    product_available: true,
  },
  {
    key: 3,
    product_name: "Tablet",
    product_code: "PROD003",
    product_price: "$499.99",
    product_stock: 30,
    product_available: true,
  },
  {
    key: 4,
    product_name: "Headphones",
    product_code: "PROD004",
    product_price: "$199.99",
    product_stock: 100,
    product_available: true,
  },
  {
    key: 5,
    product_name: "Smartwatch",
    product_code: "PROD005",
    product_price: "$299.99",
    product_stock: 20,
    product_available: false,
  },
  {
    key: 6,
    product_name: "Camera",
    product_code: "PROD006",
    product_price: "$599.99",
    product_stock: 15,
    product_available: true,
  },
  {
    key: 7,
    product_name: "Printer",
    product_code: "PROD007",
    product_price: "$249.99",
    product_stock: 10,
    product_available: false,
  },
  {
    key: 8,
    product_name: "Monitor",
    product_code: "PROD008",
    product_price: "$399.99",
    product_stock: 5,
    product_available: true,
  },
  {
    key: 9,
    product_name: "Keyboard",
    product_code: "PROD009",
    product_price: "$49.99",
    product_stock: 200,
    product_available: true,
  },
  {
    key: 10,
    product_name: "Mouse",
    product_code: "PROD010",
    product_price: "$29.99",
    product_stock: 150,
    product_available: true,
  },
];
