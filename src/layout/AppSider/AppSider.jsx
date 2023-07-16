import React, { memo } from "react";

// import SiderMenu from "./src/SiderMenu/SiderMenu";
import SiderMenuList from "./src/SiderMenuList/SiderMenuList";
import { SiderStyleWrap } from "./style";

const Sider = memo(() => {

  return (
    <SiderStyleWrap>
      {/* <SiderMenu /> */}
      <SiderMenuList />
    </SiderStyleWrap>
  );
});

export default Sider;
