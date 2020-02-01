import styled, { webkit } from "styled-components";
import Ellipse from "../../../assets/images/Ellipse.svg";
import Button from "../../../assets/images/Button.svg";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  min-width: 10vw;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #c4c4c4;
  h1 {
    width: 16em;
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
      background-size: auto;
      background-repeat: no-repeat;
      background-image: url(${Button});
      .circle {
        width: 42px;
        display: flex;
        height: 42px;
        margin: -4.3px 0px 0px 5px;
        align-items: center;
        background-size: auto;
        justify-content: center;
        background-repeat: no-repeat;
        background-image: url(${Ellipse});
        img {
          width: 40%;
        }
      }
      button {
        width: auto;
        height: auto;
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: transparent;
        #subText {
          /* display: flex; */
          font-size: 8px;
          font-weight: bold;
          line-height: 0px;
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
          line-height: 5px;
          font-style: normal;
          align-items: center;
          font-family: Montserrat;
        }
      }
      &:hover {
        opacity: 1;
        transition: opacity 500ms ease-in;
      }
    }
  }
`;

export { Container };
