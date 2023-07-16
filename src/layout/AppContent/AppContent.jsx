import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { ContentStyleWrap } from "./style";

const Content = memo(() => {
  return (
    <ContentStyleWrap>
      <Outlet />
    </ContentStyleWrap>
  );
});

export default Content;
