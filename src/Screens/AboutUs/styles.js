import styled from "styled-components";

const Container = styled.div`
  min-width: 10vw;
  height: 100vh;
  display: flex;
  color: #2b9cc2;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid black;
  h1 {
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
    font-style: normal;
    text-align: center;
    font-family: "Montserrat";
  }
  #Test {
    width: 92%;
    height: 25em;
    display: flex;
    margin: 10px auto;
    justify-content: flex-end;
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
