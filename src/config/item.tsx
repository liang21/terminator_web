import { MenuProps } from "antd";
import {
  HomeOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];
// 登录请求到数据之后，就可以跟items这个数组进行匹配
const items: MenuItem[] = [
  {
    label: "首页",
    key: "/home",
    icon: <HomeOutlined />,
  },
  {
    label: "项目设置",
    key: "/project",
    icon: <DesktopOutlined />,
  },
  {
    label: "ui测试",
    key: "/ui",
    icon: <UserOutlined />,
    children: [
      {
        label: "栏目 301",
        key: "/page3/page301",
      },
      {
        label: "栏目 302",
        key: "/page3/page302",
      },
      {
        label: "栏目 303",
        key: "/page3/page303",
      },
    ],
  },
  {
    label: "API测试",
    key: "/api_test",
    icon: <TeamOutlined />,
    children: [
      {
        label: "栏目 401",
        key: "/page4/page401",
      },
      {
        label: "栏目 304",
        key: "/page4/page402",
      },
    ],
  },
  {
    label: "流量回放",
    key: "/page5",
    icon: <FileOutlined />,
  },
  {
    label: "系统设置",
    key: "/page6",
    icon: <FileOutlined />,
  },
];

export default items;
