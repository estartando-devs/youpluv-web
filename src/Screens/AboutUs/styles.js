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
      display: flex;
      min-width: 100vw;
      min-height: 100vh;
      flex-direction: column;

      .containerText {
        margin: 70px 30px 0px 30px;
      }

      #Title {
        color: #2b9cc2;
        font-size: 25px;
        line-height: 27px;
        font-weight: bold;
        font-style: normal;
        font-family: "Montserrat";
      }

      #illustration {
        max-width: 300px;
        margin: 76px auto;
      }
      h2 {
        display: flex;
        color: #00151c;
        font-size: 15px;
        flex-wrap: wrap;
        min-width: 50vw;
        font-weight: normal;
        margin: 20px auto;
        line-height: 20px;
        font-style: normal;
        text-overflow: ellipsis;
        justify-content: center;
        font-family: "Montserrat";
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
