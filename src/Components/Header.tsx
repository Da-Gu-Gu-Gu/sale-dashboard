import React from "react";
import { PieChartOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <header className="flex items-center py-3 justify-between px-5 bg-blue-400">
      <div className="img-container flex items-center gap-4">
        <PieChartOutlined className="text-white text-2xl" />
        <h1 className="text-2xl text-white font-bold">Sale Dashboard</h1>
      </div>
      <div className="avatar-container">
        <Profile />
      </div>
    </header>
  );
};

export default Header;

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";

const Profile: React.FC = () => (
  <Space size={24} className="cursor-pointer">
    <Badge dot>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
  </Space>
);
