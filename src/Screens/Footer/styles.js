import styled, { css } from "styled-components";

const Container = styled.div`
  min-width: 10vw;
  /* height: 20vh; */
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  border-top: 5px solid #c4c4c4;
  background-color: #0e223a;
  /* flex: 1; */
  div {
    height: 12em;
  }
  .flex {
    width: 100%;
    height: 10em;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .content {
    height: 3em;
    display: flex;
    align-items: center;
  }
  h2 {
    color: #F7F7F7;
    font-size: 15px;
    line-height: 10px;
    /* margin: 15px auto; */
    font-style: normal;
    font-weight: normal;
    font-family: "Montserrat";
  }
  img {
    max-width: 120px;
    margin: 5px 15px;
  }
  ${props =>
    props.mobile &&
    css`
      height: 155px;
      flex-direction: column;
      .flex {
        height: 5em;
        h2 {
          margin-bottom: -10px;
          color: #727376;
          font-size: 10px;
          line-height: 15px;
          font-style: normal;
          font-weight: normal;
          font-family: "Montserrat";
        }
      }
      .devText {
        margin-top: -20px;
      }
      .logoDevs {
        width: 60px;
        margin: 20px 0px -25px 0px;
      }
      .content {
        width: 100%;
        height: 5em;
        display: flex;
        align-items: center;
        justify-content: center;

        #logoBrazil {
          width: 80px;
        }

        img {
          width: 80px;
          margin: 0 auto;
        }
      }
    `};
`;

export { Container };
