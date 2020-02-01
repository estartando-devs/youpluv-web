import styled, { css } from "styled-components";

const Container = styled.div`
  h2 {
    display: flex;
    color: #00151c;
    font-size: 14px;
    flex-wrap: wrap;
    min-width: 246px;
    font-weight: 500;
    margin: 20px auto;
    line-height: 17px;
    font-style: normal;
    text-overflow: ellipsis;
    justify-content: center;
    font-family: Arial, sans-serif bold;
  }

  ${props =>
    props.mobile &&
    css`
      min-height: 100vh;
      display: flex;
      min-width: 100vw;
      flex-direction: column;

      #Title {
        color: #2b9cc2;
        font-size: 22px;
        margin-left: 10px;
        line-height: 27px;
        font-weight: bold;
        margin: 35px 15px;
        font-style: normal;
        font-family: "Montserrat", sans-serif;
      }

      #subTexts {
        width: calc(315px - 30px);
        margin: 0 auto;
      }

      #illustration {
        max-width: 315px;
        margin: 90px auto;
      }
      h2 {
        display: flex;
        color: #00151cd1;
        font-size: 15px;
        flex-wrap: wrap;
        min-width: 50vw;
        font-weight: 100;
        margin: 20px auto;
        line-height: 20px;
        font-style: normal;
        text-overflow: ellipsis;
        justify-content: center;
        font-family: Arial, sans-serif bold;
      }
    `};
  ${props =>
    props.desktop
      ? true
      : css`
          width: 100%;
          height: 690px;
          display: flex;
          align-items: center;
          justify-content: center;

          .containerText {
            h1 {
              color: #2b9cc2;
              font-size: 36px;
              font-weight: bold;
              line-height: 44px;
              font-style: normal;
              font-family: "Montserrat";
            }
            #subTexts {
              width: 455px;
              margin: 0 auto;
              /* width: calc(350px - 30px); */
            }
          }
          #illustration {
            width: 565px;
            height: 385px;
          }
        `};
`;
export { Container };
