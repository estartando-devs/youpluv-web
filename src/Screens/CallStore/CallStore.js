import React from "react";
import { useMedia } from "../../hooks/useMedia";
import Mobile from "./Mobile/Mobile";
import { Container } from "./styles";
import Imagens from "../../assets/images";
import TextGooglePlay from "../../assets/images/AndroidAppOnGoogle.svg";
export default function CallStore() {
  const { isLarge } = useMedia();
  const PlayStoreUrl = `https://www.google.com/url?sa=t&source=web&rct=j&url=https://play.google.com/&ved=2ahUKEwiN0LeXlbnnAhViIbkGHUmlCHEQjjgwAHoECAcQAw&usg=AOvVaw17R4zYMafohnWwu5zSuX94`;

  return isLarge ? (
    <Container id="callStore">
      <div>
        <h1>
          Baixe o app <br /> e faça parte dessa iniciativa
        </h1>
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
      </div>
      <img src={Imagens.IllustrationApp} />
    </Container>
  ) : (
    <Mobile />
  );
}
