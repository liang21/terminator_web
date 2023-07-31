import { Navigate } from "react-router-dom";
import React from "react";
import Home from "@/pages/home";
// import User from "@/pages/system/user";
/
// const Home = lazy(() => import("@/pages/home"));
// const User = lazy(() => import("@/pages/system/user"));

// 抽取函数
const withLoading = (router: JSX.Element) => (
  <React.Suspense fallback={<div>loading......</div>}>{router}</React.Suspense>
);

const routes = [
  // 嵌套路由
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  //   {
  //     path: "/",
  //     // 默认展示的主页
  //     element: <Home />,
  //     // home下的子窗口
  //     children: [
  //       {
  //         path: "/page1",
  //         element: withLoading(<Page1 />),
  //       },
  //       {
  //         path: "/page2",
  //         element: withLoading(<Page2 />),
  //       },
  //     ],
  //   },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/user",
    element: withLoading(<User />),
  },
];

export default routes;
