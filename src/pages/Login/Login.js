import styled from "styled-components";

export const LoginStyleWrap = styled.div`
  .login-content-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -220px 0 0 -200px;
    width: 400px;
    height: 350px;
    border-radius: 5px;
    background-color: rebeccapurple;
    .title {
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      background-color: aliceblue;
    }
    .form-wrap {
      margin: 0 30px;
      .input-wrap {
        margin-top: 20px;
      }
      .additional-wrap {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        span {
          cursor: pointer;
        }
      }
    }
  }
`;
