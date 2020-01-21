import React from "react";
// import { LinearTextGradient } from "react-native-text-gradient";
import { Container } from "./styles";
import IllustrationApp from "../../assets/images/illustration-app.png";
export default function CallStore() {
  return (
    <Container>
      <h1>
        Baixe o app e faça parte dessa <br />
        iniciativa
      </h1>
      <img src={IllustrationApp} />
      <button id="btn">
        <p id="SubText">Android App On GOOGLE PLAY</p>
        <h2 id="Text">GOOGLE PLAY</h2>
      </button>
    </Container>
  );
}
