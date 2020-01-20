import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  min-width: 100vw;
  flex-direction: column;
  border-top: 1px solid black;
  #Title {
    color: #2b9cc2;
    font-size: 22px;
    margin-left: 10px;
    line-height: 27px;
    font-weight: bold;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
  }
  #containerTexts {
    margin: 0px auto;
    #subTitle {
      width: 246px;
      display: flex;
      color: #00151c;
      font-size: 14px;
      flex-wrap: wrap;
      font-weight: 500;
      line-height: 17px;
      font-style: normal;
      text-overflow: ellipsis;
      justify-content: center;
      font-family: Arial, sans-serif bold;
    }
  }
  #illustration {
    width: 80%;
    height: 80%;
    margin: 30px auto;
  }
`;

export { Container };
