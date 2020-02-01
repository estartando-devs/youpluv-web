import React from "react";
import { useMedia } from "../../../hooks/useMedia";
import { Container } from "./styles";
import Imagens from "../../../assets/images";
import TextGooglePlay from "../../../assets/images/AndroidAppOnGoogle.svg";

export default function AboutUs() {
  const { isMedium, isSmall } = useMedia();

  const PlayStoreUrl = `https://play.google.com/store/search?q`;
  return (
    <Container
      id="callStore"
      desktop={isSmall + isMedium}
      mobile={isSmall + isMedium}
    >
      <h1>Baixe o app e faça parte dessa iniciativa</h1>
      <img src={Imagens.IllustrationApp} />
      <a href={PlayStoreUrl} target="_blank">
        <div class="containerButton">
          <div class="circle">
            <img src={Imagens.Icons.Playstore} alt="" />
          </div>
          <button id="btn">
            <img id="TextBtn" src={TextGooglePlay} alt="" />
          </button>
        </div>
      </a>
    </Container>
  );
}
