import React from "react";
import { Container } from "./styles";
import Images from "../../assets/images";

export default function Footer() {
  return (
    <Container>
      <h2>Desenvolvido por:</h2>
      <img src={Images.LogoDevs} alt="" />

      <h2>Apoio:</h2>
      <img src={Images.LogoBrazilFoundation} alt="" />
      <img src={Images.LogoFundação} alt="" />

      <h2>Em parceria:</h2>
      <img src={Images.LogoDefeçaCivil} alt="" />
    </Container>
  );
}
