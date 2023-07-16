import { ContainerOutlined, DesktopOutlined } from "@ant-design/icons";

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
  getItem("账号管理", "1", <DesktopOutlined />),
  getItem("标签管理", "2", <ContainerOutlined />),
  getItem("文章管理", "3", <ContainerOutlined />),
];

export default menuList;
