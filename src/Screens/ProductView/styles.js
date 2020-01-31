import styled, { css } from "styled-components";
import mobile from "./Mobile/Mobile";
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #c4c4c4;
  .content {
    display: flex;
  }
  .phone {
    width: 324px;
    height: 494px;
  }
  div {
    width: 60em;
    h1 {
      width: 20em;
      color: #2b9cc2;
      font-size: 31px;
      font-weight: bold;
      line-height: 44px;
      font-style: normal;
      font-family: "Montserrat";
    }
    p {
      width: 30em;
      color: #00151c;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      font-style: normal;
      font-family: "Montserrat";
    }
    button {
      width: 367px;
      height: 40px;
      border: none;
      outline: none;
      color: #ffffff;
      font-size: 14px;
      margin-top: 7em;
      fonttrue-weight: bold;
      line-height: 17px;
      font-style: normal;
      text-align: center;
      background: #2b9cc2;
      border-radius: 20px;
      font-family: "Montserrat";
      transition: 0.8s;
      &:hover {
        opacity: 0.6;
        transition: 0.8s;
      }
      /* ::before {
                opacity: 1;
                transition: 0.8s;
              } */
    }
  }
  img {
    width: 40px;
  }
`;

export { Container };
