import React, { memo, useState, useEffect } from "react";
import SignIn from "./src/SignIn/SignIn";
import Retrieve from "./src/Retrieve/Retrieve";
import Forget from "./src/Forget/Forget";
import Additional from "./src/Additional/Additional";
import { LoginStyleWrap } from "./style";

const index = memo(() => {
 
  const [loginReq, setLoginReq] = useState({
    name: "",
    password: "",
  });
  const [moduleCount, setModuleCount] = useState(1);

  function handleChangeModule(count) {
    setModuleCount(count);
  }
  // 接收 注册账号 和 忘记密码 回调的参数
  function handleLoginClick(params, count) {
    const newReq = Object.assign({}, params);
    setLoginReq(newReq);
    console.log(loginReq, newReq, "loginReq");
    setModuleCount(count);
  }
  return (
    <LoginStyleWrap>
      <div className="login-wrap">
        <div className="title">博客管理系统</div>
        <div className="content-wrap">
          {moduleCount === 1 && <SignIn loginReq={loginReq} />}
          {moduleCount === 2 && <Retrieve loginClick={handleLoginClick} />}
          {moduleCount === 3 && <Forget loginClick={handleLoginClick} />}
          <Additional
            changeModule={handleChangeModule}
            currentCount={moduleCount}
          />
        </div>
      </div>
    </LoginStyleWrap>
  );
});

export default index;
