import React from "react";
import { useMedia } from "../../../hooks/useMedia";
import { Container } from "./styles";
import Playstore from "../../../assets/images/icons/playstore.png";
import IllustrationApp from "../../../assets/images/illustration-app.png";

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
      <img src={IllustrationApp} />
      <a href={PlayStoreUrl} target="_blank">
        <div class="containerButton">
          <div class="circle">
            <img src={Playstore} alt="" />
          </div>
          <button id="btn">
            <p id="subText">Android App On GOOGLE PLAY</p>
            <h2 id="Text">GOOGLE PLAY</h2>
          </button>
        </div>
      </a>
    </Container>
  );
}
