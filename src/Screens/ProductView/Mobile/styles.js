import styled, { css } from "styled-components";
import Imagens from "../../../assets/images";

const Container = styled.div`
  margin-bottom: 10px;
  min-width: 10vw;
  min-height: 80vh;
  display: flex;
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
    height: 35em;
    margin: 15px auto;
    .react-slideshow-container .nav:last-of-type {
      /* margin-left: -30px; */
      background-image: url(${Imagens.Icons.ArrowSvg});
      background-repeat: no-repeat;
      position: relative;
      left: -10px;
    }
    .react-slideshow-container .nav {
      height: 30px;
      background: none;
      width: 30px;
      z-index: 10;
      text-align: center;
      cursor: pointer;
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .react-slideshow-container .nav span {
      display: none;
    }
    .react-slideshow-container {
      display: flex;
      align-items: center;
      width: 100vw;
    }
    .slideImgs {
      width: 310px;
      /* height: 468px; */
      margin: auto auto;
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
    font-size: 14px;
    margin-top: 25px;
    font-weight: bold;
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
