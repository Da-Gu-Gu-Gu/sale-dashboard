import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Space } from "antd";

export const columnData = [
  {
    title: "Name",
    dataIndex: "channel_name",
    key: "channel_name",
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
    channel_id: "CH001",
    channel_name: "Facebook",
  },
  {
    key: 2,
    channel_id: "CH002",
    channel_name: "Website",
  },
  {
    key: 3,
    channel_id: "CH003",
    channel_name: "On Ground",
  },
  {
    key: 1,
    channel_id: "CH004",
    channel_name: "Telephone",
  },
];
