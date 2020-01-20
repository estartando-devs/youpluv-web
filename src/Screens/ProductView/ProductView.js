import React from "react";

import { Container } from "./styles";
import illustration from "../../assets/images/illustration.png";
export default function ProductView() {
  return (
    <Container>
      <h1 id="Title">A ideia</h1>
      <div id="containerTexts">
        <h2 id="subTitle">
          O aplicativo YouPluv foi criado para auxiliar na prevenção de
          desastres causados pelas chuvas, trazendo informações de chuva em
          tempo real de diversas áreas.
        </h2>
        <h2 id="subTitle">
          Tendo a colaboração da própria população, com apenas um simples
          pluviômetro caseiro e possível gerar informações para a base de
          sistemas e assim podemos emitir alertas para a população quando houver
          riscos de desastre.
        </h2>
      </div>
      <img id="illustration" src={illustration}></img>
    </Container>
  );
}
