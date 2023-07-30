import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { HeaderStyleWrap } from "./style";

const Header = memo(() => {
  const { userInfo } = useSelector((state) => {
    return {
      userInfo: state.loginModule.userInfo,
    };
  }, shallowEqual);
  // console.log(userInfo, "userInfo");
  return (
    <HeaderStyleWrap>
      <Avatar size="small" icon={<UserOutlined />} />
      <div className="use-info-wrap">{userInfo.name || "用户名"}</div>
    </HeaderStyleWrap>
  );
});

export default Header;
