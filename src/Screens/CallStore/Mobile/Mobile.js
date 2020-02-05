import React from "react";
import { useMedia } from "../../../hooks/useMedia";
import { Container } from "./styles";
import Imagens from "../../../assets/images";

export default function AboutUs() {
  const { isMedium, isSmall } = useMedia();

  const PlayStoreUrl = `https://www.google.com/url?sa=t&source=web&rct=j&url=https://play.google.com/&ved=2ahUKEwiN0LeXlbnnAhViIbkGHUmlCHEQjjgwAHoECAcQAw&usg=AOvVaw17R4zYMafohnWwu5zSuX94`;
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
          <img src={Imagens.BotãoBaixarApp} alt="" />
        </div>
      </a>
    </Container>
  );
}
