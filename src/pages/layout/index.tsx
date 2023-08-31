import React, { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./index.less";
import items from "@/config/item";
import { Footer } from "antd/es/layout/layout";
const { Header, Sider, Content } = Layout;

export default function Index() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const currentRoute = useLocation();
  const navigateTo = useNavigate();
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };
  let firstOpenKey: string = "";
  // 在这里进行对比   find
  function findKey(obj: { key: string }) {
    return obj.key === currentRoute.pathname;
  }
  // 多对比的是多个children
  for (let i = 0; i < items.length; i++) {
    // 判断找到不到
    if (
      items[i]!["children"] &&
      items[i]!["children"].length > 0 &&
      items[i]!["children"].find(findKey)
    ) {
      firstOpenKey = items[i]!.key as string;
      break;
    }
  }
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  const handleOpenChange = (keys: string[]) => {
    // 什么时候执行这个函数里面的代码？展开和回收某项菜单的时候执行这里的代码
    // console.log(keys);  // keys是一个数组，记录了当前哪一项是展开的(用key开记录)
    // 把这个数组修改成最后一项，因为只要一项是展开的，就是我刚刚点击的这一项
    setOpenKeys([keys[keys.length - 1]]);
    // console.log(keys);
  };
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Sider width={collapsed ? 10 : 150} collapsible collapsed={collapsed}>
        <div className="logo" />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[currentRoute.pathname]}
          onClick={menuClick}
          items={items}
          // 某项菜单展开和回收的事件
          onOpenChange={handleOpenChange}
          // 当前菜单展开项的key数组
          openKeys={openKeys}
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
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
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
          <Footer
            style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
