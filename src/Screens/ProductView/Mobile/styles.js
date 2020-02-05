import styled, { css } from "styled-components";
import Imagens from "../../../assets/images";

const Container = styled.div`
  display: flex;
  min-width: 10vw;
  min-height: 80vh;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h1 {
    width: 295px;
    color: #2b9cc2;
    margin: 0 auto;
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
  .slide {
    height: 40em;
    margin: 15px auto;
    .react-slideshow-container .nav:last-of-type {
      top: 45px;
      left: -3vw;
      position: relative;
      background-repeat: no-repeat;
      background-image: url(${Imagens.Icons.ArrowSvg});
    }
    .react-slideshow-container .nav {
      width: 30px;
      color: #fff;
      height: 30px;
      display: flex;
      cursor: pointer;
      background: none;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .react-slideshow-container .nav span {
      display: none;
    }
    .react-slideshow-container {
      width: 100vw;
      display: flex;
      align-items: center;
    }
    .slideImgs {
      width: 310px;
      margin: 40px auto;
    }
    .arrow {
      margin-left: -30px;
    }
  }
  button {
    width: 300px;
    height: 40px;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 16px;
    margin-top: 25px;
    font-weight: bold;
    line-height: 17px;
    font-style: normal;
    text-align: center;
    background: #2b9cc2;
    border-radius: 20px;
    &:hover {
      opacity: 0.6;
      transition: 0.8s;
    }
  }
`;
export { Container };
