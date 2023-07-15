import styled from "styled-components";
import logoImg from "assets/images/Login/bg.jpg";

export const LoginStyleWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${logoImg}) center/cover;
  .login-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -220px 0 0 -200px;
    width: 450px;
    height: 400px;
    border-radius: 5px;
    background-color: #fff;
    .title {
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      margin-bottom: 20px;
    }
    .content-wrap {
      margin: 0 30px;
    }
  }
`;
