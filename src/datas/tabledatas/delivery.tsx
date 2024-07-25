import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { Link } from "react-router-dom";
import { useDeleteDelivery } from "../../api/useDeliver";

const DeliveryAction = ({ deliver, setDeleted }: any) => {
  const { deleteDelivery } = useDeleteDelivery();

  const warning = () => {
    Modal.confirm({
      title: "Would you Delete this Delivery Service?",
      onCancel: () => {},
      cancelText: "No",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteDelivery(deliver.id);
        setDeleted(true);
      },
    });
  };

  return (
    <Space size="middle">
      <Link to={`/delivery/${deliver.id}`}>
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
    dataIndex: "deliver_name",
    key: "deliver_name",
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, deliver: any) => (
      <DeliveryAction setDeleted={setDeleted} deliver={deliver} />
    ),
  },
];
