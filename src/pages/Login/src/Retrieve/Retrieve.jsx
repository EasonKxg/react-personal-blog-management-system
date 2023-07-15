import React, { memo, useState } from "react";
import { Button, Input, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { register } from "services/login";
import { RetrieveStyleWrap } from "./style";

const Retrieve = memo((props) => {
  const { loginClick } = props;
  const [req, setReq] = useState({
    name: "",
    password: "",
    asswordAgain: "",
  });
  async function handleRegisterClick() {
    if (!req.name || !req.password || !req.asswordAgain) {
      return message.error("账号或者密码不能为空");
    }
    if (req.password !== req.asswordAgain) {
      return message.error("输入的密码不一致");
    }
    if (loginClick) loginClick(req, 1);
    // const data = await register(req);
    // if (data.code === 200) {
    //   // 登录 携带数据
    //   if (loginClick) loginClick(req);
    // }
  }

  return (
    <RetrieveStyleWrap>
      <Input
        className="input-wrap"
        size="large"
        placeholder="请输入账号"
        prefix={<UserOutlined />}
        onInput={(e) => setReq({ ...req, name: e.target.value })}
      />
      <Input
        className="input-wrap"
        size="large"
        placeholder="请输入邮箱"
        prefix={<MailOutlined />}
      />
      <Input.Password
        className="input-wrap"
        size="large"
        placeholder="请输入登录密码"
        prefix={<LockOutlined />}
        onInput={(e) => setReq({ ...req, password: e.target.value })}
      />
      <Input.Password
        className="input-wrap"
        size="large"
        placeholder="请输入再次输入密码"
        prefix={<LockOutlined />}
        onInput={(e) => setReq({ ...req, asswordAgain: e.target.value })}
      />
      <Button
        className="login-btn"
        type="primary"
        block
        onClick={handleRegisterClick}
      >
        注册
      </Button>
    </RetrieveStyleWrap>
  );
});

export default Retrieve;
