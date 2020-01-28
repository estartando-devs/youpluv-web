import React from "react";
import Playstore from "../../assets/images/icons/playstore.png";

import { Container } from "./styles";
import IllustrationApp from "../../assets/images/illustration-app.png";
export default function CallStore() {
  return (
    <Container>
      <h1>Baixe o app e faça parte dessa iniciativa</h1>
      <img src={IllustrationApp} />
      <div class="containerButton">
        <div class="circle">
          <img src={Playstore} alt="" />
        </div>
        <button id="btn">
          <p id="subText">Android App On GOOGLE PLAY</p>
          <h2 id="Text">GOOGLE PLAY</h2>
        </button>
      </div>
    </Container>
  );
}
