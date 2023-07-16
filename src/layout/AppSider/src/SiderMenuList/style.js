import styled from "styled-components";

export const MenuListStyleWrap = styled.div`
  width: ${(props) => {
    return props.width;
  }};
  transition: width 0.4s;
  .togglec-collapsed-wrap {
    display: flex;
    justify-content: flex-end;
    height: 44px;
    align-items: center;
    margin-right: ${(props) => {
      return props.width === "80px" ? "30px" : "10px";
    }};
    color: #1677ff;
  }
`;
