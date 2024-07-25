import { Button, Modal, Space } from "antd";

import {
  CheckCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const SaleActions = ({ sale, setDeleted }: any) => {
  const { deleteSaleInvoice } = useDeleteSale();
  const warning = () => {
    Modal.confirm({
      title: "Would you Delete this sale invoice?",
      // content: "some messages...some messages...",
      onCancel: () => {},
      cancelText: "No",
      okText: "Yes",
      okType: "danger",

      onOk: () => {
        deleteSaleInvoice(sale.id);
        setDeleted(true);
      },
    });
  };
  return (
    <Space size="middle">
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

export const columnsData = (setDeleted: any) => [
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
      <Space size="middle">
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
    key: "date",
    render: (_: any, sale: any) => (
      <p>{dayjs(sale?.date).format(dateFormat)}</p>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, sale: any) => {
      return <SaleActions sale={sale} setDeleted={setDeleted} />;
    },
  },
];

import { InputNumber } from "antd";
import { useDeleteSale } from "../../api/useSales";
import { dateFormat } from "../../utils/utils";
import dayjs from "dayjs";

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
          onChange={(value) => onQtyChange(product?.id, value)}
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
          value={product.qty}
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
      let updateProdct = product;
      const price = product.product_price || 0;
      const qty = updateProdct.qty || 0;
      return <p>$ {(price * qty).toFixed(2)}</p>;
    },
  },
];
