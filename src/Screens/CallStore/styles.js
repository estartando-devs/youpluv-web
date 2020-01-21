import styled, { webkit } from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  min-width: 10vw;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid black;
  h1 {
    margin: 0 auto;
    color: #2b9cc2;
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
    font-style: normal;
    text-align: center;
    font-family: "Montserrat";
  }
  img {
    margin: 121px auto;
    margin-bottom: -1px;
  }
  button {
    width: 280px;
    height: 50px;
    outline: none;
    border-left: none;
    border-right: none;
    border-radius: 40px;
    margin-bottom: -33px;
    box-sizing: border-box;
    background-color: transparent;
    border-top: 1.5px solid #a8ebfa;
    border-bottom: 1.5px solid #ff5b5b;

    #SubText {
      /* display: flex; */
      font-size: 8px;
      font-weight: bold;
      line-height: 10px;
      font-style: normal;
      align-items: center;
      font-family: Montserrat;
      color: #50d1ef;
    }
    #Text {
      /* display: flex; */
      color: #ff3636;
      font-size: 14px;
      font-weight: bold;
      line-height: 17px;
      font-style: normal;
      align-items: center;
      font-family: Montserrat;
    }
    &:hover {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }
  }
`;

export { Container };
