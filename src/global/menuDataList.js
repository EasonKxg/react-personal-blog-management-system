import { ContainerOutlined, UsergroupAddOutlined } from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const menuList = [
  getItem("账号管理", "/account", <UsergroupAddOutlined />),
  getItem("标签管理", "/label", <ContainerOutlined />),
  getItem("文章管理", "/article", <ContainerOutlined />),
  getItem("留言管理", "/leaveMsg", <ContainerOutlined />),
];

export default menuList;
