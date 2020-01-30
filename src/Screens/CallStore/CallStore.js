import React from "react";
import { useMedia } from "../../hooks/useMedia";
import Mobile from "./Mobile/Mobile";
import { Container } from "./styles";
import Playstore from "../../assets/images/icons/playstore.png";
import IllustrationApp from "../../assets/images/illustration-app.png";
export default function CallStore() {
  const { isLarge } = useMedia();

  return isLarge ? (
    <Container>
      <div>
        <h1>
          Baixe o app <br /> e faça parte dessa iniciativa
        </h1>
        <div class="containerButton">
          <div class="circle">
            <img src={Playstore} alt="" />
          </div>
          <button id="btn">
            <p id="subText">Android App On GOOGLE PLAY</p>
            <h2 id="Text">GOOGLE PLAY</h2>
          </button>
        </div>
      </div>
      <img src={IllustrationApp} />
    </Container>
  ) : (
    <Mobile />
  );
}
