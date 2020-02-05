import styled, { css } from "styled-components";
import backgroundDesktop from "../../assets/images/backgroundDesktop.png";
import background from "../../assets/images/backgroundHeader.png";

const Container = styled.div`
  min-width: 10vw;
  height: 100vh;
  display: flex;
  background: #0e223a;
  background-image: url(${props => (props.desktop ? backgroundDesktop : null)});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
  justify-content: center;
  #arrow {
    display: contents;
  }
  ${props =>
    props.mobile &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 80%;
  width: 90%;
  .containerText {
    display: flex;
    flex-direction: column;
    #logo {
      width: fit-content;
    }
  }

  #list {
    right: 0px;
    width: 10px;
    bottom: 0px;
    display: flex;
    position: fixed;
    background: #0e223a;
    align-items: center;
    list-style-type: none;
    flex-direction: column;
    justify-content: center;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    .list_item {
      padding: 15px;
      margin-right: 35px;
    }
  }
  ${props =>
    props.mobile &&
    css`
      width: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
      .containerText {
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
        #logo {
          width: 252px;
          height: 72.59px;
          margin-bottom: 25px;
        }
        h2 {
          width: 15em;
        }
      }
      #list {
        display: none;
      }
    `}
`;

const MyText = styled.h2`
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
