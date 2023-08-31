import { Navigate } from "react-router-dom";
import React, { ReactNode } from "react";
import { DesktopOutlined, SettingOutlined } from "@ant-design/icons";

import Layout from "@/pages/layout";
import User from "@/pages/system/user";
import Project from "@/pages/system/project";
import Product from "@/pages/system/product";
import Home from "@/pages/home";
import NotFound from "@/pages/404/404";

export interface IRouter {
  title?: string;
  path?: string;
  key?: string;
  icon?: ReactNode;
  element?: JSX.Element;
  children?: IRouter[];
}

// 抽取函数
const withLoading = (router: JSX.Element) => (
  <React.Suspense fallback={<div>loading......</div>}>{router}</React.Suspense>
);

const routes: IRouter[] = [
  // 嵌套路由
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        title: "首页",
        key: "home",
        icon: <DesktopOutlined />,
        element: withLoading(<Home />),
      },
      {
        path: "/project",
        title: "测试跟踪",
        key: "project",
        icon: <SettingOutlined />,
        element: withLoading(<Project />),
      },
      {
        path: "/api",
        title: "接口测试",
        key: "project",
        icon: <SettingOutlined />,
        element: withLoading(<Project />),
      },
      {
        path: "/ui",
        title: "ui测试",
        key: "project",
        icon: <SettingOutlined />,
        element: withLoading(<Project />),
      },
      {
        path: "/performance",
        title: "性能测试",
        key: "performance",
        icon: <SettingOutlined />,
        element: withLoading(<Project />),
      },
      {
        path: "/settings",
        title: "系统设置",
        key: "settings",
        icon: <SettingOutlined />,
        element: withLoading(<Project />),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  {
    path: "/404",
    element: withLoading(<NotFound />),
  },
];

export default routes;
