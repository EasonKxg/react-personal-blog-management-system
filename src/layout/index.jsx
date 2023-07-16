import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import AppSider from "./AppSider/AppSider";
import AppContent from "./AppContent/AppContent";
import AppHeader from "./AppHeader/AppHeader";
import { LayoutStyleWrap } from "./style";

const Layout = memo(() => {
  return (
    <LayoutStyleWrap>
      <div className="sider-wrap">
        <AppSider />
      </div>
      <div className="content-wrap">
        <AppHeader />
        <AppContent />
      </div>
    </LayoutStyleWrap>
  );
});

export default Layout;
