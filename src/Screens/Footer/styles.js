import styled, { css } from "styled-components";

const Container = styled.div`
  min-width: 10vw;
  height: 25vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  border-top: 1px solid #c4c4c4;
  div {
    flex: 1;
  }
  h2 {
    color: #727376;
    font-size: 12px;
    line-height: 15px;
    margin: 15px auto;
    font-style: normal;
    font-weight: normal;
    font-family: "Montserrat";
  }
  img {
    margin: 20px 15px;
  }
  ${props =>
    props.mobile &&
    css`
      height: 75vh;
      flex-direction: column;

      div {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    `};
`;

export { Container };
