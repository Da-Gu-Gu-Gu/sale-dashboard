import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { Link } from "react-router-dom";
import { useDeleteChannel } from "../../api/useSaleChannel";

const ChannelActions = ({ channel, setDeleted }: any) => {
  const { deleteChannel } = useDeleteChannel();

  const warning = () => {
    Modal.confirm({
      title: "Would you Delete this Channel?",
      // content: "some messages...some messages...",
      onCancel: () => {},
      cancelText: "No",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteChannel(channel.id);
        setDeleted((prev: any) => !prev);
      },
    });
  };

  return (
    <Space size="middle">
      <Link to={`/salechannels/${channel.id}`}>
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
    dataIndex: "channel_name",
    key: "channel_name",
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, channel: any) => (
      <ChannelActions setDeleted={setDeleted} channel={channel} />
    ),
  },
];
