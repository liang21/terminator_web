import { Navigate } from "react-router-dom";
import React, { ReactNode } from "react";
import { DesktopOutlined, SettingOutlined } from "@ant-design/icons";

import Layout from "@/pages/layout";
import User from "@/pages/system/user";
import Project from "@/pages/system/project";
import Product from "@/pages/system/product";
import Home from "@/pages/home";

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
        path: "/user",
        title: "用户管理",
        key: "user",
        icon: <SettingOutlined />,
        element: withLoading(<User />),
      },
    ],
  },
];

export default routes;
