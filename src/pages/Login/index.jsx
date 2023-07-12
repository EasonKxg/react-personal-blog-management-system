import React, { memo, useState } from "react";
import { Button, Input, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ImgBg from "assets/Login/bg.jpg";
import { getData } from "services/login/index";
import { LoginStyleWrap } from "./Login";

const index = memo(() => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  console.log(getData());
  return (
    <LoginStyleWrap>
      {/* <img src={require("../../assets/Login/bg.jpg")} /> */}
      <div className="login-content-wrap">
        <div className="title">博客管理系统</div>
        <div className="form-wrap">
          <div className="input-wrap">
            <Input
              size="large"
              placeholder="请输入账号"
              prefix={<UserOutlined />}
            />
          </div>
          <div className="input-wrap">
            <Input
              size="large"
              placeholder="请输入账号"
              prefix={<UserOutlined />}
            />
          </div>
          <div className="input-wrap">
            <Input
              size="large"
              placeholder="请输入验证码"
              prefix={<UserOutlined />}
            />
          </div>
          <div className="input-wrap">
            <Button type="primary" block>
              登录
            </Button>
          </div>
          <div className="additional-wrap">
            <span>注册账号</span>
            <span>忘记密码?</span>
          </div>
        </div>
      </div>
    </LoginStyleWrap>
  );
});

export default index;
