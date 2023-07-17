import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import menuList from "global/menuDataList";
import { MenuListStyleWrap } from "./style";

const SiderMenuList = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState("200px");
  const [actvePath, setActvePath] = useState("/account");
  function handleMenuClick(item) {
    const path = item["key"];
    navigate(path);
    setActvePath(path);
  }

  function changeToggleCollapsed() {
    setCollapsed(!collapsed);
    setWidth(!collapsed ? "80px" : "200px");
  }

  return (
    <MenuListStyleWrap width={width}>
      <div className="togglec-collapsed-wrap">
        <div onClick={changeToggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
      <Menu
        onClick={handleMenuClick}
        defaultSelectedKeys={[actvePath]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={menuList}
      ></Menu>
    </MenuListStyleWrap>
  );
};
export default SiderMenuList;
