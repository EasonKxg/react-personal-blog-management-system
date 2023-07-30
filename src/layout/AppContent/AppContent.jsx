import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { ContentStyleWrap } from "./style";

const Content = memo(() => {
  return (
    <ContentStyleWrap>
      <div className="content">
        <Outlet />
      </div>
    </ContentStyleWrap>
  );
});

export default Content;
