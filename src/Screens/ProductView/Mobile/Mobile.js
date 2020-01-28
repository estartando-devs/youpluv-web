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
        Construa seu pluviômetro caseiro e envie dados de chuvas quando quiser
      </h1>
      <div id="subContainer">
        <img class="phone" src={Smartphone} />
        <img class="arrow" src={ArrowSvg} />
      </div>
      <a href={PlayStoreUrl} target="_blank">
        <button>BAIXAR APP</button>
      </a>
    </Container>
  );
}
