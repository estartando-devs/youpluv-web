import styled, { css } from "styled-components";
import CloudStirring from "../../assets/Animation/cloudStirring.json";

const Container = styled.div`
  ${props =>
    props.mobile &&
    css`
      z-index: 5;
      min-height: 100vh;
      display: flex;
      min-width: 100vw;
      flex-direction: column;
      border-top: 1px solid black;
      background-color: transparent;
      background-image: url(${props =>
        props.mobile ? CloudStirring : CloudStirring});
      justify-content: center;

      #containerTexts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 0 auto;
        
        #Title {
          color: #2b9cc2;
          font-size: 22px;
          margin-left: 10px;
          line-height: 27px;
          font-weight: bold;
          font-style: normal;
          font-family: "Montserrat", sans-serif;
        }

        #subTexts {
          width: calc(319px - 30px);
          margin: 0 auto;
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
        }
      }
      
      #illustration {
        width: 70%;
        max-width: 300px;
        /* min-width: 75vw; */
        margin: auto auto;
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
          justify-content: space-evenly;
          background-image: url(${CloudStirring});
          /* <CloudStirring {...props} /> */

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
              width: 340px;
              margin: 0 auto;
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
            }
          }
          #illustration {
            width: 600px;
            height: 385px;
          }
        `};
`;
export { Container };
