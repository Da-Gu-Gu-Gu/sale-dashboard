import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteChannel } from "../../api/useSaleChannel";

const ChannelActions = ({ channel }: any) => {
  const { deleteChannel } = useDeleteChannel();
  const navigate = useNavigate();
  const warning = () => {
    Modal.warning({
      title: "Would you Delete this Channel?",
      // content: "some messages...some messages...",
      onOk: () => {
        deleteChannel(channel.id);
        navigate("/salechannels");
      },
    });
  };

  return (
    <Space size="middle" onClick={() => console.log(channel)}>
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

export const columnData = [
  {
    title: "Name",
    dataIndex: "channel_name",
    key: "channel_name",
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, channel: any) => <ChannelActions channel={channel} />,
  },
];
