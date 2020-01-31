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
    color: #727376;
    font-size: 15px;
    line-height: 15px;
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
      height: 35vh;
      flex-direction: column;
      .flex {
        margin-top: -45px;
      }
      .content {
        width: 100%;
        height: 5em;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          min-width: 20vw;
          margin: 5px 0px;
        }
      }
    `};
`;

export { Container };
