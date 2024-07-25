import { Layout, Menu } from "antd";
import Header from "../Components/Header";
import menus from "../utils/menus";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const { Content, Sider } = Layout;

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout>
        <Sider
          width={200}
          style={{ background: "white", paddingTop: 24 }}
          collapsible
          // className="shadow"
          collapsed={collapsed}
          trigger={null}
          onMouseEnter={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {menus.map((item: any) => (
              <Menu.Item key={item?.key} icon={item?.icon}>
                <Link to={`/${item?.path}`}>{item?.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0" }}>
          <Content
            style={{
              margin: 24,
              // margin: 0,
              minHeight: 280,
            }}
            className="bg-white p-5 shadow rounded-xl"
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
