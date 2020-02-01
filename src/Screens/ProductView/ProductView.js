import React from "react";
import { useMedia } from "../../hooks/useMedia";
import { Container } from "./styles";
import ArrowSvg from "../../assets/images/icons/arrow.svg";
import Smartphone from "../../assets/images/smartphone.png";
import Mobile from "./Mobile/Mobile";

export default function AboutUs() {
  const { isMedium, isSmall, isLarge } = useMedia();

  const PlayStoreUrl = `https://play.google.com/store/search?q`;
  return isLarge ? (
    <Container desktop={isSmall + isMedium} mobile={isSmall + isMedium}>
      <div class="content" desktop={isSmall + isMedium}>
        <img class="phone" src={Smartphone} alt="" />
        <div>
          <h1>
            Construa seu pluviômetro caseiro e envie dados de chuvas quando
            quiser
          </h1>
          <p>
            Basta assistir ao nosso tutorial de como construir seu pluviômetro e
            estará pronto para coletar e enviar dados.
          </p>
          <a href={PlayStoreUrl} target="_blank">
            <button>BAIXAR APP</button>
          </a>
        </div>
        <img class="arrow" src={ArrowSvg} />
      </div>
    </Container>
  ) : (
    <Mobile />
  );
}
