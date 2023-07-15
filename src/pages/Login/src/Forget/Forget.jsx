import React, { memo, useState } from "react";
import { Button, Input, Spin } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { ForgetStyleWrap } from "./style";

const Forget = memo((props) => {
  const { loginClick } = props;
  const [req, setReq] = useState({
    name: "",
    email: "",
    code: undefined,
    password: "",
  });
  const { Search } = Input;
  function handleForgetClick() {
    if (loginClick) loginClick(req, 1);
  }
  return (
    <ForgetStyleWrap>
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
        onInput={(e) => setReq({ ...req, email: e.target.value })}
      />
      <Search
        className="input-wrap"
        placeholder="请输入验证码"
        enterButton="获取验证码"
        onInput={(e) => setReq({ ...req, password: e.target.value })}
      />
      <Input.Password
        className="input-wrap"
        size="large"
        placeholder="请输入新的密码"
        prefix={<LockOutlined />}
        onInput={(e) => setReq({ ...req, name: e.target.value })}
      />
      <Button
        className="login-btn"
        type="primary"
        block
        onClick={handleForgetClick}
      >
        确认
      </Button>
    </ForgetStyleWrap>
  );
});

export default Forget;
