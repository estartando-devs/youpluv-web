import styled, { css } from "styled-components";

const Container = styled.div`
  ${props =>
    props.outro &&
    css`
    /* display: none; */
  height: 100vh;
  display: flex;
  min-width: 100vw;
  flex-direction: column;
  border-top: 1px solid black;
  /* display: ${props => (props.desktop ? "flex" : "none")}; */
  #Title {
    color: #2b9cc2;
    font-size: 22px;
    margin-left: 10px;
    line-height: 27px;
    font-weight: bold;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
  }
  /* ${props => props.desktop && css``} */

  #containerTexts {
    width: 81vw;
    margin: 0 auto;
    #subTitle {
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
  #illustration {
    width: 81vw;
    margin: auto auto;
  }
  `};
`;
export { Container };
