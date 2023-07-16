import styled from "styled-components";

export const LoadingStyleWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.2);
  .loading-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -220px 0 0 -200px;
    width: 400px;
    height: 360px;
    line-height: 360px;
    border-radius: 5px;
    text-align: center;
  }
`;
