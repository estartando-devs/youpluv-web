import styled, { webkit } from "styled-components";
import Ellipse from "../../../assets/images/Ellipse.svg";
import Button from "../../../assets/images/Button.svg";

const Container = styled.div`
  display: flex;
  min-width: 10vw;
  min-height: 80vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h1 {
    width: 15em;
    margin: 0 auto;
    color: #2b9cc2;
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
    font-style: normal;
    margin-bottom: 5em;
    text-align: center;
    font-family: "Montserrat";
  }
  a {
    text-decoration: none;
    .containerButton {
      z-index: 1;
      width: 300px;
      display: flex;
      height: 53.54px;
      margin-top: -1px;
      align-items: center;
    }
  }
`;

export { Container };
