import React from "react";
import { useMedia } from "../../../hooks/useMedia";
import { Container } from "./styles";
import ArrowSvg from "../../../assets/images/icons/arrow.svg";
import Smartphone from "../../../assets/images/smartphone.png";

export default function AboutUs() {
  const { isMedium, isSmall } = useMedia();

  const PlayStoreUrl = `https://play.google.com/store/search?q`;
  return (
    <Container desktop={isSmall + isMedium} mobile={isSmall + isMedium}>
      <h1>
        Acesse notícias publicadas
        <br />
        pela Defesa Civil
      </h1>
      <div>
        <img src={Smartphone} />
        <img src={ArrowSvg} />
      </div>
      <a href={PlayStoreUrl} target="_blank">
        <button>BAIXAR APP</button>
      </a>
    </Container>
  );
}
