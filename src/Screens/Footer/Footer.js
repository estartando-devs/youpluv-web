import React from "react";
import { Container } from "./styles";
import Images from "../../assets/images";
import { useMedia } from "../../hooks/useMedia";

export default function Footer() {
  const { isMedium, isSmall } = useMedia();

  return (
    <Container mobile={isSmall + isMedium}>
      <div class="flex">
        <h2>Desenvolvido por:</h2>
        <img src={Images.LogoDevs} alt="" />
      </div>
      <div class="apoio flex">
        <h2>Apoio:</h2>
        <div class="content ">
          <img src={Images.LogoBrazilFoundation} alt="" />
          <img src={Images.LogoFundação} alt="" />
          <img src={Images.LogoDefeçaCivil} alt="" />
        </div>
      </div>
    </Container>
  );
}
