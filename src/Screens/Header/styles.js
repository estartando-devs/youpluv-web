import styled, { css } from "styled-components";
import backgroundDesktop from "../../assets/images/backgroundDesktop.png";
import background from "../../assets/images/backgroundHeader.png";

const Container = styled.div`
  min-width: 10vw;
  height: 100vh;
  background: #49a7de;
  background-image: url(${props =>props.mobile ? background : backgroundDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  ${props =>
    props.mobile &&
    css`
      display: flex;
      align-items: center;
      height: 100vh;
      justify-content: center;
    `}
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  width: 90%;
  #list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    position: absolute;
    right: 10px;
    bottom: 0px;
    .list_item {
      padding: 10px;
    }
  }
  ${props =>
    props.mobile &&
    css`
      width: 80%;
      #list {
        display: none;
      }
    `}
`;

const MyText = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 36px;
  ${props =>
    props.subTitle &&
    css`
      font-size: 18px;
    `}
`;

const MyImg = styled.img`
  position: absolute;
  bottom: 30px;
  fill: #fff;
  ${props =>
    props.mobile &&
    css`
      bottom: 20px;
    `};
`;

export { Container, MyText, Content, MyImg };
