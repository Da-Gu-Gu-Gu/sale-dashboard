import React from "react";
import {
  ShoppingOutlined,
  UserOutlined,
  ProductOutlined,
  CompressOutlined,
  BankOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { paths } from "../routes/data";

// Define MenuItem type correctly
export type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  path: String,
  icon?: any,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    path,
    icon,
    children,
  } as MenuItem;
}

const menus: MenuItem[] = [
  getItem("Orders", "1", paths.order, <ShoppingOutlined />),
  getItem("Sale Invoice", "2", paths.sale, <ShoppingOutlined />),
  getItem("Customers", "3", paths.customer, <UserOutlined />),
  getItem("Products", "4", paths.product, <ProductOutlined />),
  getItem("Sale Channels", "5", paths.channel, <CompressOutlined />),
  getItem("Payments Methods", "6", paths.payment, <BankOutlined />),
];

export default menus;
