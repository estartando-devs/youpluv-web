import React from "react";
import { Container } from "./styles";
import Images from "../../assets/images";
import { useMedia } from "../../hooks/useMedia";

export default function Footer() {
  const { isMedium, isSmall } = useMedia();

  return (
    <Container mobile={isSmall + isMedium}>
      <div>
        <h2>Desenvolvido por:</h2>
        <img src={Images.LogoDevs} alt="" />
      </div>
      <div class="apoio">
        <h2>Apoio:</h2>
        <img src={Images.LogoBrazilFoundation} alt="" />
        <img id="LogoFundação" src={Images.LogoFundação} alt="" />
      </div>
      <div>
        <h2>Em parceria:</h2>
        <img src={Images.LogoDefeçaCivil} alt="" />
      </div>
    </Container>
  );
}
