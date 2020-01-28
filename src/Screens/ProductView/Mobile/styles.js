import styled, { css } from "styled-components";

const Container = styled.div`
  min-width: 10vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #c4c4c4;
  h1 {
    color: #2b9cc2;
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
    font-style: normal;
    font-family: "Montserrat";
  }
  p {
    display: none;
  }
  #subContainer {
    width: 92%;
    height: 25em;
    display: flex;
    margin: 20px auto;
    flex: 0.8;
    .phone {
      width: 300px;
      height: 400px;
      margin: auto auto;
    }
    .arrow {
      margin-left: -30px;
    }
  }
  button {
    width: 265px;
    height: 40px;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    line-height: 17px;
    font-style: normal;
    text-align: center;
    background: #2b9cc2;
    border-radius: 20px;
    font-family: "Montserrat";
    &:hover {
      opacity: 0.6;
      transition: 0.8s;
    }
  }
  display: none;
`;
export { Container };
