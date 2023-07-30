import styled from "styled-components";

export const ContentStyleWrap = styled.div`
  width: calc(100% - 32px);
  height: calc(100% - (44px + 32px));
  margin: 16px;
  border-radius: 8px;
  background-color: #fff;
  .content {
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    padding-top: 16px;
    margin: auto;
  }
`;
