import React, { useState } from "react";
import type { MenuProps } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./index.less";
import items from "@/config/item";
const { Header, Sider, Content } = Layout;
const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `系统设置 ${key}`,

    // children: new Array(4).fill(null).map((_, j) => {
    //   const subKey = index * 4 + j + 1;
    //   return {
    //     key: subKey,
    //     label: `option${subKey}`,
    //   };
    // }),
  };
});

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const currentRoute = useLocation();
  const navigateTo = useNavigate();
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };
  console.log(currentRoute);
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Sider
        width={collapsed ? 10 : 130}
        collapsible
        collapsed={collapsed}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="logo" />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[currentRoute.pathname]}
          onClick={menuClick}
          items={items.map((item) => {
            const { key, label, icon } = item;
            return {
              label,
              key,
              icon,
            };
          })}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[currentRoute.pathname]}
            items={items1}
          />
        </Header>
        <Layout>
          <Content
            style={{
              margin: "3px 5px",
              padding: 10,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
