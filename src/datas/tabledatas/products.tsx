import {
  CheckCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { Link } from "react-router-dom";
import { useDeleteProduct } from "../../api/useProducts";

const ProductActions = ({ setDeleted, product }: any) => {
  const { deleteProduct } = useDeleteProduct();
  const warning = () => {
    Modal.confirm({
      title: "Would you Delete this Product?",
      // content: "some messages...some messages...",
      onCancel: () => {},
      cancelText: "No",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteProduct(product.id);
        setDeleted(true);
      },
    });
  };

  return (
    <Space size="middle">
      <Link to={`/products/${product.id}`}>
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
      <Space size="middle">
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
    render: (_: any, product: any) => (
      <ProductActions setDeleted={setDeleted} product={product} />
    ),
  },
];
