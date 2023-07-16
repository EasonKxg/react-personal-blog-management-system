import React, { useState } from "react";
import { Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import menuList from "../../../../global/menuDataList";
import { MenuListStyleWrap } from "./style";

const SiderMenuList = () => {
  const [collapsed, setCollapsed] = useState(false);
  const changeToggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };
  return (
    <MenuListStyleWrap width="30">
      <div className="togglec-collapsed-wrap">
        <div onClick={changeToggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={menuList}
      />
    </MenuListStyleWrap>
  );
};
export default SiderMenuList;
