import styled from "styled-components";

const Container = styled.div`
  min-width: 10vw;
  height: 75vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid black;
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
    margin: 20px auto;
  }
`;

export { Container };
