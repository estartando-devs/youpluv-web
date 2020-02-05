import React from "react";
import { Container } from "./styles";
import Images from "../../assets/images";
import { useMedia } from "../../hooks/useMedia";

export default function Footer() {
  const { isMedium, isSmall } = useMedia();

  return (
    <Container mobile={isSmall + isMedium}>
      <div className="flex">
        <h2 className="devText">Desenvolvido por:</h2>
        <img className="logoDevs" src={Images.LogoDevs} alt="" />
      </div>
      <div className="apoio flex">
        <h2>Apoio:</h2>
        <div className="content">
          <img id="logoBrazil" src={Images.LogoBrazilFoundation} alt="" />
          <img src={Images.LogoFundação} alt="" />
          <img src={Images.LogoDefeçaCivil} alt="" />
        </div>
      </div>
    </Container>
  );
}
