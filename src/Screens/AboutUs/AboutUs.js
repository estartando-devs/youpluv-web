import React from "react";
import { useMedia } from "../../hooks/useMedia";
import { Container } from "./styles";
// import CloudStirring from "./CloudStirring/cloudStirring";

import illustration from "../../assets/images/illustration.png";
export default function ProductView(props) {
  const { isMedium, isSmall } = useMedia(props);

  return (
    <>
      {/* <CloudStirring id="aboutUs"> */}
      <Container
        id="aboutUs"
        desktop={isSmall + isMedium}
        mobile={isSmall + isMedium}
      >
        <div
          class="containerText"
          desktop={isSmall + isMedium}
          mobile={isSmall + isMedium}
          id="containerTexts"
        >
          <h1 id="Title">A ideia</h1>
          <div id="subTexts">
            <h2>
              O aplicativo YouPluv foi criado para auxiliar na prevenção de
              desastres causados pelas chuvas, trazendo informações de chuva em
              tempo real de diversas áreas.
            </h2>
            <h2>
              Tendo a colaboração da própria população, com apenas um simples
              pluviômetro caseiro e possível gerar informações para a base de
              sistemas e assim podemos emitir alertas para a população quando
              houver riscos de desastre.
            </h2>
          </div>
        </div>
        <img id="illustration" src={illustration}></img>
      </Container>
      {/* </CloudStirring> */}
    </>
  );
}
