import styled, { css } from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
  min-width: 10vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #c4c4c4;
  h1 {
    width: 295px;
    color: #2b9cc2;
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
    font-style: normal;
    text-align: center;
    font-family: "Montserrat";
  }
  p {
    display: none;
  }
  #subContainer {
    width: 90%;
    height: 30em;
    display: flex;
    margin: 15px auto;
    align-items: center;
    justify-content: center;
    .phone {
      width: 305px;
      height: 468px;
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
`;
export { Container };
