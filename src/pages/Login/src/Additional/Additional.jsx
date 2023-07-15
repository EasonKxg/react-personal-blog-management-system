import React, { memo, useState, useEffect } from "react";
import { SignInStyleWrap } from "./style";

const Additional = memo((props) => {
  const { changeModule, currentCount } = props;
  const [changModuleCount, setChangModuleCount] = useState(1);

  // 更新
  useEffect(() => {
    setChangModuleCount(currentCount);
  }, [currentCount]);

  // 选择的模块
  function changeModuleClick(count) {
    if (changeModule) changeModule(count);
    setChangModuleCount(count);
  }
  return (
    <SignInStyleWrap>
      {changModuleCount !== 1 && (
        <span onClick={() => changeModuleClick(1)}>登录账号</span>
      )}
      {changModuleCount !== 2 && (
        <span onClick={() => changeModuleClick(2)}>注册账号</span>
      )}
      {changModuleCount !== 3 && (
        <span onClick={() => changeModuleClick(3)}>忘记密码?</span>
      )}
    </SignInStyleWrap>
  );
});

export default Additional;
