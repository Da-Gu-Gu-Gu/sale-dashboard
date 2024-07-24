import { Button, Modal, Space } from "antd";

import {
  CheckCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const SaleActions = ({ sale }: any) => {
  const { loading, deleteSaleInvoice } = useDeleteSale();
  const navigate = useNavigate();
  const warning = () => {
    Modal.warning({
      title: "Would you Delete this sale invoice?",
      // content: "some messages...some messages...",
      onOk: () => {
        deleteSaleInvoice(sale.id);
        navigate(paths.sale);
      },
    });
  };
  return (
    <Space size="middle" onClick={() => console.log(sale)}>
      <Link to={`/sale/${sale.id}`}>
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
    render: (_: any, sale: any) => {
      return <SaleActions sale={sale} />;
    },
  },
];

import { InputNumber } from "antd";
import { useDeleteSale } from "../../api/useSales";
import { paths } from "../../routes/data";

export const saleDetailColumnData = (data: any, onQtyChange: any) => [
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
      <Space size="middle">
        <InputNumber
          min={1}
          max={10}
          size="small"
          defaultValue={product.qty}
          onChange={(value) => onQtyChange(product.productId, value)}
          className="cursor-pointer text-lg text-blue-700"
        />
      </Space>
    ),
  },
  {
    title: "Sub Total",
    key: "total",
    render: (_: any, product: any) => {
      const price = product.product_price || 0;
      const qty = product.qty || 0;
      return <p>$ {(price * qty).toFixed(2)}</p>;
    },
  },
];

export const saleCreateColumnData = (data: any, onQtyChange: any) => [
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
      <Space size="middle">
        <InputNumber
          min={1}
          max={product?.product_stock}
          size="small"
          defaultValue={product.qty}
          onChange={(value) => onQtyChange(product.id, value)}
          className="cursor-pointer text-lg text-blue-700"
        />
      </Space>
    ),
  },
  {
    title: "Sub Total",
    key: "total",
    render: (_: any, product: any) => {
      console.log("aa", product);
      let updateProdct = product;
      const price = product.product_price || 0;
      const qty = updateProdct.qty || 0;
      return <p>$ {(price * qty).toFixed(2)}</p>;
    },
  },
];
