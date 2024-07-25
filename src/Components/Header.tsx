import React from "react";
import {
  DownOutlined,
  LogoutOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Divider, Dropdown, MenuProps, theme } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
const Header = () => {
  const { useToken } = theme;
  const { token } = useToken();

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <p>
          👋 Hello, <span className="font-semibold">Admin </span>
        </p>
      ),
    },
  ];

  return (
    <header className="flex shadow-lg items-center py-3 justify-between px-5 bg-white/40 rounded  ">
      <div className="img-container flex items-center gap-4">
        <PieChartOutlined className="text-blue-500 text-2xl" />
        <h1 className="text-2xl text-black font-semibold">Sale Dashboard</h1>
      </div>

      <Dropdown
        menu={{ items }}
        dropdownRender={(menu) => (
          <div style={contentStyle}>
            {React.cloneElement(menu as React.ReactElement, {
              style: menuStyle,
            })}
            <Divider style={{ margin: 0 }} />
            <div className="w-full p-3">
              <Button
                icon={<LogoutOutlined />}
                type="primary"
                className="bg-red-400 w-full "
              >
                LogOut
              </Button>
            </div>
          </div>
        )}
      >
        <div className="avatar-container cursor-pointer flex gap-3 items-center bg-white p-1 rounded-lg ">
          <Profile />
          <DownOutlined className="text-gray-500" />
        </div>
      </Dropdown>
    </header>
  );
};

export default Header;

const Profile: React.FC = () => (
  <Space size={24} className="cursor-pointer">
    <Badge dot>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
  </Space>
);
