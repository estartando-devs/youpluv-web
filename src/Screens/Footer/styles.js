import styled, { css } from "styled-components";

const Container = styled.div`
  min-width: 10vw;
  /* height: 20vh; */
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #c4c4c4;
  div {
    flex: 1;
    height: 100%;
  }
  #LogoFundação {
    position: relative;
    top: -15px;
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
    width: 120px;
    margin: 20px 15px;
  }
  ${props =>
    props.mobile &&
    css`
      min-height: 75vh;
      flex-direction: column;

      div {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    `};
`;

export { Container };
