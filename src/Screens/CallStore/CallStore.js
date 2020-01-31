import React from "react";
import { useMedia } from "../../hooks/useMedia";
import Mobile from "./Mobile/Mobile";
import { Container } from "./styles";
import Playstore from "../../assets/images/icons/playstore.png";
import IllustrationApp from "../../assets/images/illustration-app.png";
import TextGooglePlay from "../../assets/images/AndroidAppOnGoogle.svg";
export default function CallStore() {
  const { isLarge } = useMedia();
  const PlayStoreUrl = `https://play.google.com/store/search?q`;

  return isLarge ? (
    <Container id="callStore">
      <div>
        <h1>
          Baixe o app <br /> e faça parte dessa iniciativa
        </h1>
        <a href={PlayStoreUrl} target="_blank">
          <div class="containerButton">
            <div class="circle">
              <img src={Playstore} alt="" />
            </div>
            <button id="btn">
              <img id="TextBtn" src={TextGooglePlay} alt="" />
            </button>
          </div>
        </a>
      </div>
      <img src={IllustrationApp} />
    </Container>
  ) : (
    <Mobile />
  );
}
