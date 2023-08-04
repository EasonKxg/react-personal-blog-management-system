import React, { memo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { changeToken } from "store/modules/main";
import { changeUserInfo } from "store/modules/login";
import { doLogin } from "services/login";

import { SignInStyleWrap } from "./style";
const SignIn = memo((props) => {
  const { loginReq } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Search } = Input;

  const [req, setReq] = useState({
    name: "kxg",
    password: "123456",
  });

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(loginReq));
    if (data["name"]) {
      setReq(data);
    }
    // console.log(req, "req");
  }, [loginReq]);

  async function handleLoginClick() {
    if (!req.name || !req.password) {
      return message.error("账号或者密码不能为空");
    }
    const data = await doLogin(req);
    if (data.code === 200) {
      dispatch(changeToken(data.data.token));
      dispatch(changeUserInfo(data.data));
      window.localStorage.setItem("token", data.data.token);

      navigate("/account");
    }
  }

  return (
    <SignInStyleWrap>
      <Input
        className="input-wrap"
        size="large"
        placeholder="请输入账号"
        defaultValue={req.name}
        onChange={(e) => setReq({ ...req, name: e.target.value })}
        prefix={<UserOutlined />}
      />
      <Input.Password
        className="input-wrap"
        size="large"
        placeholder="请输入密码"
        defaultValue={req.password}
        onChange={(e) => setReq({ ...req, password: e.target.value })}
        prefix={<LockOutlined />}
      />
      <Search placeholder="请输入验证码" enterButton="获取验证码" />
      <Button
        className="login-btn"
        type="primary"
        block
        onClick={handleLoginClick}
      >
        登录
      </Button>
    </SignInStyleWrap>
  );
});

export default SignIn;
