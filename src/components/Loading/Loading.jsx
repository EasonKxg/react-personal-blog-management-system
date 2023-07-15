import React, { memo } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { LoadingStyleWrap } from "./style";

const Loading = memo(() => {
  return (
    <LoadingStyleWrap>
      <div className="loading-wrap">
        <LoadingOutlined style={{ color: "#1677ff", fontSize: "45px" }} />
      </div>
    </LoadingStyleWrap>
  );
});

export default Loading;
